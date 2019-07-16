import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import pagination from './steps.json'

Vue.use(Vuex)

const femlightAPI = axios.create({
  // baseURL: process.env.APP_URL = '/customize/api',
  baseURL: 'http://alex.www.femlight.com/customize/api',
  headers: {
    // Authorization: 'Bearer ' + document.querySelector('meta[name="api_token"]').content
    Authorization: 'Bearer: ' + process.env.FEMLIGHT_API_TOKEN
  }
})

const store = new Vuex.Store({
  	state: {
	    step: 0,
    steps: pagination.steps,
	    options: {},
	   	product: {}
  	},
  	mutations: {
	    SET_OPTIONS(state, payload) {
	    	state.options = payload
	    },
	    SET_STEP(state, payload) {
	    	state.step = payload
	    },
	    UPDATE_PRODUCT(state, payload) {
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

      console.log('thisIsWhereTheCallWouldGo', state)
      const options = new URLSearchParams()
      options.append('anatomy', state.product.anatomy)
      options.append('texture', state.product.texture)
      options.append('femlight_model', state.product.femlight_model)
      options.append('sleve_cover', state.product.sleve_cover)
      options.append('upload_anatomy_file', state.product.upload_anatomy_file)
      options.append('upload_insignia_file', state.product.upload_insignia_file)

      // if (state.product.anatomy) {
      // console.log('SENDING THE API!!!!',
      //   state.product
      // )
      // femlightAPI.put('/design/update', options).then((res) => {
      //   console.log({
      //     res: res
      //   })
      // })
      // } else {
      //   console.log('NOT SENDING THE API')
      // }
	    },
	    SET_PRODUCT(state, payload) {
	    	state.product = payload
	    }
  	},
  	actions: {
	  	fetchOptions(context) {
	  		// femlightAPI.get('/design/options').then((res) => {
      // context.commit('SET_OPTIONS', res.data)
	  		// })
      const mockOptionsData = require('./mock-options.json')
      context.commit('SET_OPTIONS', mockOptionsData)
	  	},
	  	fetchActiveProduct(context) {
	  		// check local storage for previous product
	  		//
	  		if (localStorage.getItem('product')) { context.commit('SET_PRODUCT', localStorage.getItem('product')) } else {
        femlightAPI.get('/design/not-in-cart-product').then((res) => {
		  			if (res.data) { context.commit('SET_PRODUCT', (res.data.data ? res.data.data : {})) }
		  		})
      }
	  	},
	  	nextStep(context) {
      const next = parseInt(context.state.step) + 1
      const max = context.state.steps.length

      if (next >= max) {
        context.commit('SET_STEP', 0)
      } else {
        context.commit('SET_STEP', next)
      }
	  	},
	  	prevStep(context) {
      const next = parseInt(context.state.step) - 1
      const max = context.state.steps.length - 1

      if (next < 0) {
        context.commit('SET_STEP', max)
      } else {
        context.commit('SET_STEP', next)
      }
	  	},
    updateProduct(context, payload) {
      context.commit('UPDATE_PRODUCT', payload)
    }
  	}
})

export default () => {
  return store
}
