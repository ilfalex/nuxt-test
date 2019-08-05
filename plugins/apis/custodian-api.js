
import axios from 'axios';

export const custodian = {

	/**
	 *	get the queue of items for a given column endpoint
	 *
	 * @param endpoint string 'pending' | 'approved' | 'rejected'
	 * @return json object
	 */
	async fetchQueue( endpoint ){
		return await axios.get( endpoint )
	}
}