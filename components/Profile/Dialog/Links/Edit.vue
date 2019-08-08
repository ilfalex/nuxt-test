<template lang="html">
  <v-card @keydown.enter="saveLink()">
    <v-card-title
      class="headline grey lighten-2"
      primary-title
    >
      {{ (createNew ? 'Create New': 'Edit') }} Link
    </v-card-title>

    <div class="pa-4">
      <v-text-field
        v-model="selectedItem.title"
        label="Title"
      />
      <v-text-field
        v-model="selectedItem.icon"
        label="Icon"
      />
      <v-text-field
        v-model="selectedItem.url"
        label="Link URL"
      />
    </div>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        flat
        @click="saveLink()"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    createNew: Boolean,
    selectedItem: Object
  },
  computed: {
    user: {
      get () {
        return this.$store.state.wizard.user
      },
      set (value) {
        return this.$store.commit('SET_USER', value)
      }
    }
  },
  methods: {
    saveLink () {
      this.$parent.$parent.$parent.dialog = false
      this.$store.state.wizard.user.links.push(this.selectedItem)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
