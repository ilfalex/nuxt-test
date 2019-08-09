
import axios from 'axios'

export class UserGlobal{

  	login (fields) {
	    return axios.post('http://mike.www.femlight.com/xxx/oauth/token', {
		    grant_type: 'password',
		    client_id: 2,
		    client_secret: process.env.clientSecret,
		    username: fields.email,
		    password: fields.password
	    })
  	}

  	logout (userType) {
    	return axios.post('/' + userType + '/logout')
  	}

  	setAxiosHeaders (auth) {
	    // set the json header
	    axios.defaults.headers.common['Accept'] = 'application/json'
	    axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth
	    axios.defaults.baseURL = process.env.baseUrl
	    return axios
  	}

  	async getUserType(){
  		return await axios.get('/user')
  			.then(response => {
  				return response
  			})
  			.catch(() => {
  				return axios.get('/custodian')
  					.then(response => {
  						return response
  					})
  					.catch(() => {
  						return axios.get('/artist')
  					})
  			})
  	}
}