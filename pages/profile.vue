<template>
  <div
    v-if="user"
    class="pa-5"
  >
    <!-- {{ user.hero_image }} -->
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
    user () {
      return this.$store.state.wizard.user
    }
  },
  mounted () {
    console.log({
      store: this.$store
    })
    this.$store.dispatch('wizard/getUser')
  }
}
</script>
