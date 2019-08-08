import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import pagination from './steps.json'

const cookieparser = process.server ? require('cookieparser') : undefined

Vue.use(Vuex)

const femlightAPI = axios.create({
  // baseURL: process.env.APP_URL = '/customize/api',
  baseURL: 'http://alex.www.femlight.com/customize/api',
  headers: {
    // Authorization: 'Bearer ' + document.querySelector('meta[name="api_token"]').content
    Authorization: 'Bearer: ' + process.env.FEMLIGHT_API_TOKEN
  }
})

export const state = () => ({
  auth: null,
  step: 0,
  steps: pagination.steps,
  user: {},
  options: {},
  product: {}
})

export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  },
  SET_OPTIONS (state, payload) {
    state.options = payload
  },
  SET_USER (state, payload) {
    state.user = payload
  },
  SET_STEP (state, payload) {
    state.step = payload
  },
  UPDATE_PRODUCT (state, payload) {
    if (payload.param === 'anatomy') {
      state.product.anatomy = payload.value.id
    }
    if (payload.param === 'texture') {
      state.product.texture = payload.value.id
    }
    if (payload.param === 'femlight_model') {
      state.product.femlight_model = payload.value.id
    }
    if (payload.param === 'sleve_cover') {
      state.product.sleve_cover = payload.value.id
    }
    if (payload.param === 'upload_anatomy_file') {
      state.product.upload_anatomy_file = payload.value
    }
    if (payload.param === 'upload_insignia_file') {
      state.product.upload_insignia_file = payload.value
    }

    console.log('API call to update product', state)
    const options = new URLSearchParams()
    options.append('anatomy', state.product.anatomy)
    options.append('texture', state.product.texture)
    options.append('femlight_model', state.product.femlight_model)
    options.append('sleve_cover', state.product.sleve_cover)
    options.append('upload_anatomy_file', state.product.upload_anatomy_file)
    options.append('upload_insignia_file', state.product.upload_insignia_file)
  },
  UPDATE_PROFILE (state, payload) {
    state.user = { ...state.user, ...payload }
  },
  SET_PRODUCT (state, payload) {
    state.product = payload
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  },
  getUser (context) {
    console.log('getting user')
    const mockUserData = require('./mock-user.json')
    const mockUserProfile = require('./mock-profile.json')
    const data = { ...mockUserData.user, ...mockUserProfile.profile }
    context.commit('SET_USER', data)

    // axios.get('http://mike.www.femlight.com/xxx/api/profile/32').then((res) => {
    //   context.commit('SET_USER', res.data)
    // })
  },
  fetchOptions (context) {
    // femlightAPI.get('/design/options').then((res) => {
    // context.commit('SET_OPTIONS', res.data)
    // })
    const mockOptionsData = require('./mock-options.json')
    context.commit('SET_OPTIONS', mockOptionsData)
  },
  fetchActiveProduct (context) {
    // check local storage for previous product
    //
    if (localStorage.getItem('product')) {
      context.commit('SET_PRODUCT', localStorage.getItem('product'))
    } else {
      femlightAPI.get('/design/not-in-cart-product').then((res) => {
        if (res.data) {
          context.commit('SET_PRODUCT', res.data.data ? res.data.data : {})
        }
      })
    }
  },
  nextStep (context) {
    const next = parseInt(context.state.step) + 1
    const max = context.state.steps.length

    if (next >= max) {
      context.commit('SET_STEP', 0)
    } else {
      context.commit('SET_STEP', next)
    }
  },
  prevStep (context) {
    const next = parseInt(context.state.step) - 1
    const max = context.state.steps.length - 1

    if (next < 0) {
      context.commit('SET_STEP', max)
    } else {
      context.commit('SET_STEP', next)
    }
  },
  updateProduct (context, payload) {
    context.commit('UPDATE_PRODUCT', payload)
  }
}
