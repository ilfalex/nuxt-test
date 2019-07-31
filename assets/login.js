
import axios from 'axios'

// get the cookie object
const Cookie = process.client ? require('js-cookie') : undefined

export const login = {

  /**
   * register
   *
   * @param args (object) = 
      {
        fields: {
          username,
          password,
          password_confirmation // registration only
        }
        store,
        router
      }
   * @return error via promise
   */
  register ( args ) {

    return axios.post('http://mike.www.femlight.com/xxx/register', args.fields)
      .then(response => {
        this.login( args )
      })
  },

  /**
   * login
   *
   * @param args (object) = 
      {
        fields: {
          username,
          password,
          password_confirmation // registration only
        }
        store,
        router
      }
   * @return 
   */
  login ( args ) {
    	// const that = this
    axios.post('http://mike.www.femlight.com/xxx/oauth/token', {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'DINJRja6MRzW2VtbSW0XokCfwdu6O2tNDeVSNIPU',
      username: args.fields.email,
      password: args.fields.password
    })
      .then(response => {
        const auth = {
            accessToken: response.data.access_token
        }
        args.store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        args.router.push('/user-details')
      })
      .catch(error => {
        console.log({error})
      })
  },
  setAxiosHeaders (auth) {
    // set the json header
    axios.defaults.headers.common['Accept'] = 'application/json'
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth
    axios.defaults.baseURL = process.env.baseUrl
  }
}
