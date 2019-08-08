<template lang="html">
  <v-layout v-if="user" column>
    <v-flex class="profile-section">
      <v-layout column>
        <h4 class="display-1 font-weight-thin mb-3">
          Edit Hero
        </h4>
        <hero
          :user="user"
        />
      </v-layout>
    </v-flex>

    <v-flex class="profile-section">
      <v-layout column>
        <h4 class="display-1 font-weight-thin mb-2">
          Edit About Me
        </h4>
        <about-me
          :user="user"
        />
      </v-layout>
    </v-flex>

    <v-flex class="profile-section">
      <v-layout column>
        <h4 class="display-1 font-weight-thin mb-2">
          Edit Photos
        </h4>
        <photos
          :user="user"
        />
      </v-layout>
    </v-flex>

    <v-flex class="profile-section">
      <v-layout column>
        <h4 class="display-1 font-weight-thin mb-2">
          Edit Products
        </h4>
        <products
          :user="user"
        />
      </v-layout>
    </v-flex>

    <v-flex class="profile-section">
      <v-layout column>
        <h4 class="display-1 font-weight-thin mb-2">
          Edit Links
        </h4>
        <links
          :user="user"
        />
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import Hero from '@/components/Profile/Hero'
import AboutMe from '@/components/Profile/AboutMe'
import Photos from '@/components/Profile/Photos'
import Products from '@/components/Profile/Products'
import Links from '@/components/Profile/Links'
export default {
  components: {
    Hero,
    Photos,
    Products,
    Links,
    AboutMe
  },
  data () {
    return {
      tabs: [
        'Hero',
        'About',
        'Photos',
        'Products',
        'Links'
      ]
    }
  },
  computed: {
    user () {
      return this.$store.state.profile.user
    }
  },
  mounted () {
    this.$store.dispatch('profile/getUser')
  }
}

</script>

<style lang="css" scoped>
  .profile-section {
    margin-bottom: 5em !important;
  }
</style>
