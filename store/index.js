

const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  auth: null,
  user: {}
})

export const mutations = {
    setAuth (state, auth) {
      state.auth = auth
    },
    setUser (state, user) {
      state.user = user
    },
}

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
    	let auth = null
	    // get the user and auth data from the cookie
      	if (req.headers.cookie) {

	        const parsed = cookieparser.parse(req.headers.cookie)
	        
	        auth =  JSON.parse(parsed.auth)
	        	
		    commit('setAuth',auth)
	    }
    }
} 