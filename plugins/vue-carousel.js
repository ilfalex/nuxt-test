import Vue from 'vue'
import { Carousel, Slide } from 'vue-carousel'

Vue.component('carousel', Carousel)
Vue.component('slide', Slide)

console.log({
  ayeYOOO: 'loading from the vue carousel.js!',
  element: Slide
})
