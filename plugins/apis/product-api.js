
import axios from 'axios'

export const product = {

	getSingleProduct( $id ){
		return false;
	},

	getOptions(){
		return axios.get('/design/options')
	},

	updateProduct( product ){
		return axios.post('/design/update', product)
	}
}