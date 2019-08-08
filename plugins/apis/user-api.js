
import axios from 'axios'

export const user = {

	login ( fields ) {
	    return axios.post('http://mike.www.femlight.com/xxx/oauth/token', {
		    grant_type: 'password',
		    client_id: 2,
		    client_secret: process.env.clientSecret,
		    username: fields.email,
		    password: fields.password
	    })
	},

	logout ( userType ) {
    	return axios.post('/'+userType+'/logout')
	},

	async register ( fields ) {
		const f = fields
		return await axios.post('http://mike.www.femlight.com/xxx/register', fields)
			.then(() => {
				return this.login(f)
			})
	},

	getUser () {
		return axios.get('/user')
	},

	getVerficiationStatus ( type='' ) {
	    type = type ? '/'+type : type
	    return axios.get('/user/verification'+type)
	},

	setAxiosHeaders ( auth ) {
		// set the json header
		axios.defaults.headers.common['Accept'] = 'application/json'
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth
		axios.defaults.baseURL = process.env.baseUrl
	},
}