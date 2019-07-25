// const axios = require('axios')
// const expect = require('chai').expect
// const mockUserProfile = require('../store/mock-profile.json')
//
// const femlightAPI = axios.create({
//   baseURL: 'http://mike.www.femlight.com/xxx/api',
//   headers: {
//     Authorization: 'Bearer: ' + process.env.FEMLIGHT_API_TOKEN
//   }
// })
//
// describe('API Initialization', async () => {
//   it('API should return status of 200', async () => {
//     await femlightAPI.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
//       expect(res.status).to.equal(200)
//     })
//   })
//
//   it('API should return a title and a status', async () => {
//     await femlightAPI.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
//       expect(res.data.title).to.be.ok
//       expect(res.data.userId).to.be.ok
//       expect(res.data.id).to.be.ok
//     })
//   })
//
//   it('Fetch Design Builder Information via API', async () => {
//     await femlightAPI.get('/customize/design').then((res) => {
//       // expect(res.status).to.equal(200)
//       expect(res.data.anatomy).to.be.ok
//       expect(res.data.form_factors).to.be.ok
//       expect(res.data.textures).to.be.ok
//     }, (res) => {
//       // expect(res.response.status).to.equal(200)
//     })
//   })
//
//   it('Should Fetch user via API', async () => {
//     await femlightAPI.get('/profile/32').then((res) => {
//       expect(res.data.professional_title).to.be.ok
//       expect(res.data.hero_image).to.be.ok
//       expect(res.data.about_me).to.be.ok
//       expect(res.data.products).to.be.ok
//       expect(res.data.images).to.be.ok
//       console.log({
//         res: res.data
//         // mockUserProfile
//       })
//     }, (res) => {
//       // expect(res.response.status).to.equal(200)
//     })
//   })
// })
