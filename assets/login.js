
import axios from 'axios'

export const login = {

  login (username, password) {
    	// const that = this
    return axios.post('http://mike.www.femlight.com/xxx/oauth/token', {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'DINJRja6MRzW2VtbSW0XokCfwdu6O2tNDeVSNIPU',
      username,
      password,
      provider: 'custodians'
    })
  },
  setAxiosHeaders (auth) {
    // set the json header
    axios.defaults.headers.common['Accept'] = 'application/json'
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth
    axios.defaults.baseURL = process.env.baseUrl
  }
}
