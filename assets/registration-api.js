
import axios from 'axios'

export const registrationAPI = {

  getUserDetails () {
    return axios.get('/register/user-details')
  },

  setUserDetails (fields) {
    // axios.post()
    return axios.post('/register/user-details', fields)
  },

  getIdImg( endpoint ){
  	return axios.get( endpoint )
  },

  deleteIdImg ( endpoint ){
  	return axios.delete( endpoint )
  },

  getHelloSignUrl(){
  	return axios.get('/register/sign-docs')
  },

  confirmSubmission(){
  	return axios.put('/register/confirm-submission')
  }
}
