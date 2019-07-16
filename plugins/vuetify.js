import Vue from 'vue'
import Vuetify from 'vuetify'
// // import colors from 'vuetify/es5/util/colors'
import theme from '../assets/theme.js'
console.log({
  theme
})
Vue.use(Vuetify, {
  theme: theme
})
