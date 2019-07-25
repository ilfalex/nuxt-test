<template lang="html">
  <v-card>
    <v-card-title
      class="headline grey lighten-2"
      primary-title
    >
      Edit About Me Text
    </v-card-title>

    <div class="pa-4">
      <v-textarea
        v-model="user.about_me.body"
        label="Title"
      />
    </div>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        flat
        @click="$emit('dialog', false)"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  computed: {
    user: {
      get () {
        return this.$store.state.user
      },
      set (value) {
        return this.$store.commit('SET_USER', value)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
