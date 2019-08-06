import axios from 'axios'

export const dashboard = {

	getUser( verification=0 ){
		return axios.get('/dashboard/user/' + verification)
	}
}