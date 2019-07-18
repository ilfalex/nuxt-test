<template>
  <div class="pa-5">
    <!-- {{ user.hero_image }} -->
    <div class="grey lighten-3 pa-3 mb-5">
      <h4 class="display-3 font-weight-thin mb-3">Edit Hero</h4>
      <hero :user="user" class="mb-5"/>
    </div>

    <div class="grey lighten-3 pa-3 mb-5">
      <h4 class="display-3 font-weight-thin mb-2">Edit About Me</h4>
      <about-me :user="user" class="mb-5"/>
    </div>

    <div class="grey lighten-3 pa-3 mb-5">
      <h4 class="display-3 font-weight-thin mb-2">Edit Photos</h4>
      <photos :user="user" class="mb-5"/>
    </div>

    <div class="grey lighten-3 pa-3 mb-5">
      <h4 class="display-3 font-weight-thin mb-2">Edit Products</h4>
      <products :user="user" class="mb-5"/>
    </div>

  </div>
</template>

<script>
import Hero from '../components/Profile/Hero'
import AboutMe from '../components/Profile/AboutMe'
import Photos from '../components/Profile/Photos'
import Products from '../components/Profile/Products'
export default {
  components: {
    Hero,
    Photos,
    Products,
    AboutMe
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  mounted () {
    this.$store.dispatch('getUser')
  }
}
</script>
