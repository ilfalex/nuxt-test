
import axios from 'axios'

export const registrationAPI = {

  getUserDetails () {
    return axios.get('/register/user-details')
  },

  setUserDetails (fields) {
    // axios.post()
    return axios.post('/register/user-details', fields)
  },

  deleteIdImg ( side ){
  	return axios.delete('/register/id/' + side)
  }
}
