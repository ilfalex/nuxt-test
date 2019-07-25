<template lang="html">
  <v-card>
    <v-card-title
      class="headline grey lighten-2"
      primary-title
    >
      Edit Text
    </v-card-title>

    <div class="pa-4">
      <v-text-field
        v-model="user.stage_name"
        label="Title"
      />
      <v-text-field
        v-model="user.professional_title"
        label="Subtitle"
      />
    </div>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        flat
        @click="save()"
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
  },
  methods: {
    save () {}
  }
}
</script>

<style lang="css" scoped>
</style>
