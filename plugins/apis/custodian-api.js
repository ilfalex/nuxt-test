
import axios from 'axios'

export const custodian = {

  /**
	 *	get the queue of items for a given column endpoint
	 *
	 * @param endpoint string 'pending' | 'approved' | 'rejected'
	 * @return json object
	 */
  fetchQueue (endpoint) {
    return axios.get(endpoint)
  }
}
