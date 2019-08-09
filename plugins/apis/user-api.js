
import axios from 'axios'

import { UserGlobal } from './user-global-api.js'

class User extends UserGlobal{

  async register (fields) {
    const f = fields
    return await axios.post('http://mike.www.femlight.com/xxx/register', fields)
      .then(() => {
        return this.login(f)
      })
  }

  getUser () {
    return axios.get('/user')
  }

  getVerficiationStatus (type = '') {
	    type = type ? '/' + type : type
	    return axios.get('/user/verification' + type)
  }
}

export const user = new User()