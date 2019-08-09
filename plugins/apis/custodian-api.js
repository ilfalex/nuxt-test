
import axios from 'axios'

import { UserGlobal } from './user-global-api.js'

class Custodian extends UserGlobal{

	getUser () {
		return axios.get('/custodian');
	}

	/**
	*	get the queue of items for a given column endpoint
	*
	* @param endpoint string 'pending' | 'approved' | 'rejected'
	* @return json object
	*/
	fetchQueue (endpoint) {
		return axios.get(endpoint)
	}

	setAxiosHeaders (auth) {
		// set the json header
		axios.defaults.headers.common['Accept'] = 'application/json'
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth
		axios.defaults.baseURL = process.env.baseUrl
	}
}

export const custodian = new Custodian()