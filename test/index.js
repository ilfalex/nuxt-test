const axios = require('axios')
const expect = require('chai').expect

const femlightAPI = axios.create({
  baseURL: 'http://alex.www.femlight.com/customize/api',
  headers: {
    Authorization: 'Bearer: ' + process.env.FEMLIGHT_API_TOKEN
  }
})

describe('API Initialization', async () => {

  it('API should return status of 200', async () => {
    await femlightAPI.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      expect(res.status).to.equal(200)
    })
  })

  it('API should return a title and a status', async () => {
    await femlightAPI.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
      expect(res.data.title).to.be.ok
      expect(res.data.userId).to.be.ok
      expect(res.data.id).to.be.ok
    })
  })

  it('Fetch Design Builder Information via API', async () => {
    await femlightAPI.get('/customize/design').then((res) => {
      expect(res.status).to.equal(200)
      expect(res.data.anatomy).to.be.ok
      expect(res.data.form_factors).to.be.ok
      expect(res.data.textures).to.be.ok
    }, (res) => {
      expect(res.response.status).to.equal(200)
    })
  })

})
