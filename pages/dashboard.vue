<template>
  <div class="pa-5">
    this is their dashboard
    {{ user }}
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="(item, i) in user"
        :key="i"
        sm3
        class="pa-3"
      >
        <div class="grey lighten-3 pa-2">
          <h4 class="heading grey--text">
            {{ i }}:
          </h4>
          <span class="display-1">{{ item }}</span>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  components: {
    // Registration,
    // SwiperContainer
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
