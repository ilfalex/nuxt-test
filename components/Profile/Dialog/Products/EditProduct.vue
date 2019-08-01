<template lang="html">
  <v-card>
    <v-card-title
      class="headline grey lighten-2"
      primary-title
    >
      Edit Product
    </v-card-title>

    <div class="pa-4">
      <v-text-field
        v-model="selectedItem.name"
        label="Title"
      />
      <v-text-field
        v-model="selectedItem.description"
        label="Description"
      />
      <v-text-field
        v-model="selectedItem.price"
        label="Price"
      />
      <v-text-field
        v-model="selectedItem.url"
        label="Link URL"
      />
    </div>
    <div class="">
      <v-layout
        row
        wrap
      >
        <v-flex
          v-for="(image, i) in selectedItem.images"
          :key="i"
          xs6
          class="pa-2"
        >
          <v-img :src="image" />
        </v-flex>
      </v-layout>
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
  props: {
    selectedItem: Object
  },
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
