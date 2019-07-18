<template>
  <div class="pa-5">
    <!-- {{ user.hero_image }} -->
    <hero :user="user" />
    <about-me :user="user" />
    <photos :user="user" />
    <products :user="user" />

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
