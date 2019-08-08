const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  auth: null,
  user: {}
})

export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  },
  SET_USER (state, payload) {
    state.user = payload
  },
  UPDATE_PROFILE (state, payload) {
    state.user = { ...state.user, ...payload }
  },
  SET_PRODUCT (state, payload) {
    state.product = payload
  }
}

export const actions = {
  removeLink (context, item) {
    // make a copy of the object,
    const links = [...context.state.user.links]
    // remove the specified item
    links.splice(links.indexOf(item), 1)
    // commit this to the store
    context.commit('UPDATE_PROFILE', {
      links: links
    })
  },
  removePhoto (context, item) {
    // make a copy of the object,
    const images = [...context.state.user.images]
    // remove the specified item
    images.splice(images.indexOf(item), 1)
    // commit this to the store
    context.commit('UPDATE_PROFILE', {
      images: images
    })
  },
  removeProduct (context, item) {
    // make a copy of the object,
    const products = [...context.state.user.products]
    // remove the specified item
    products.splice(products.indexOf(item), 1)
    // commit this to the store
    context.commit('UPDATE_PROFILE', {
      products: products
    })
  },
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
  updateProduct (context, payload) {
    context.commit('UPDATE_PRODUCT', payload)
  }
}
