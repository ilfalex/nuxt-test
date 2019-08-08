<template>
  <div
    class="pa-5"
  >
    <h3 class="display-4 mb-4">
      Profile Editor
    </h3>

    <profile-tabs v-if="style === 'tabs'" />
    <profile-inline v-if="style === 'inline'" />
  </div>
</template>

<script>
import ProfileTabs from '@/components/Profile/Edit/Tabs'
import ProfileInline from '@/components/Profile/Edit/Inline'
export default {
  components: {
    ProfileTabs,
    ProfileInline
  },
  data () {
    return {
      style: 'inline'
    }
  },
  computed: {
  },
  mounted () {
    // this.$store.dispatch('profile/getUser')
  }
}
</script>
