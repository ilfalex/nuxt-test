<template lang="html">
  <div>
    <v-layout justify-end>
      <v-btn @click="addPhotos()">
        <v-icon>add</v-icon>
      </v-btn>
    </v-layout>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="item in user.images"
        :key="item.id"
        sm4
        class="pa-3"
      >
        <v-img
          v-if="item.url"
          :src="item.url"
          :height="200"
        />
        <v-btn
          class="red--text"
          @click="removePhoto(item)"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  methods: {
    removePhoto (item) {
      this.user.images.splice(this.user.images.indexOf(item), 1)
    },
    addPhotos () {
      // TODO: need to create a centralized location for adding photos
    }
  }
}
</script>

<style lang="css" scoped>

</style>
