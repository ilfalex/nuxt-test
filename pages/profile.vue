<template>
  <div class="pa-5">
    <!-- {{ user.hero_image }} -->
    <h3 class="display-4 mb-4">
      Profile Editor
    </h3>

    <v-tabs
      v-model="active"
      color="primary"
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="n in tabs"
        :key="n"
        ripple
      >
        {{ n }}
      </v-tab>

      <v-tab-item class="grey lighten-3 pa-3 mb-5">
        <h4 class="display-1 font-weight-thin mb-3">
          Edit Hero
        </h4>
        <hero
          :user="user"
        />
      </v-tab-item>

      <v-tab-item class="grey lighten-3 pa-3 mb-5">
        <h4 class="display-1 font-weight-thin mb-2">
          Edit About Me
        </h4>
        <about-me
          :user="user"
        />
      </v-tab-item>

      <v-tab-item class="grey lighten-3 pa-3 mb-5">
        <h4 class="display-1 font-weight-thin mb-2">
          Edit Photos
        </h4>
        <photos
          :user="user"
        />
      </v-tab-item>

      <v-tab-item class="grey lighten-3 pa-3 mb-5">
        <h4 class="display-1 font-weight-thin mb-2">
          Edit Products
        </h4>
        <products
          :user="user"
        />
      </v-tab-item>
    </v-tabs>
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
  data () {
    return {
      tabs: [
        'Hero',
        'About',
        'Photos',
        'Products'
      ]
    }
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
