
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

    const thoseArgs = args
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
        thoseArgs.store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth, {expires: 364}) // saving token in cookie for server rendering
        // args.router.push('/user-details')

        // determine the user type and send them on their way
        this.getUserType( auth.accessToken, thoseArgs.router )
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
  },

  /**
   * after the user logs in, make another call to get the user type
   *
   * @param accessToken
   */
  getUserType( accessToken, router ){

    const thatRouter = router

    // set the axios headers
    this.setAxiosHeaders( accessToken )

    // make api call to get the user type
    axios.get('/user')
      .then(response => {
        // set a cookie with the user type
        Cookie.set('user', 'user');
        // redirect to dashboard
        thatRouter.push('/dashboard')
      })
      .catch(error => {
        // attempt to login as a custodian
        axios.get('/is-custodian')
          .then(response => {
            Cookie.set('user', 'custodian')
            thatRouter.push('/custodian-queue')
          })
          .catch(error => {
            axios.get('/is-artist')
              .then(response => {
                Cookie.set('user', 'custodian')
                thatRouter.push('/custodian-queue')
              })
              .catch(error => {
                console.log({error})
              })
          })
      })
  },

  getUser(){
    return axios.get('/user')
  },

  getUserVerification( type='' ){
    type = type ? '/'+type : type
    return axios.get('/user/verification'+type)
  },

  logout(){
    // delete the cookies
    Cookie.remove('auth')
    Cookie.remove('user')
    return axios.post('/user/logout')
  }
}
