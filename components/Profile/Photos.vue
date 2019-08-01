<template lang="html">
  <div>
    <v-layout justify-end>
      <v-btn @click="addPhotos()">
        <v-icon>add</v-icon>
        Add New Photos
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
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <!-- <edit-text v-if="dialogInterface === 'text'" /> -->
      <!-- <edit-color v-if="dialogInterface === 'color'" /> -->
      <photo-uploader />
    </v-dialog>
  </div>
</template>

<script>
import PhotoUploader from '@/components/Utility/PhotoUploader'
export default {
  components: {
    PhotoUploader
  },
  props: {
    user: Object
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    removePhoto (item) {
      this.user.images.splice(this.user.images.indexOf(item), 1)
    },
    addPhotos () {
      // TODO: need to create a centralized location for adding photos
      this.dialog = true
    }
  }
}
</script>

<style lang="css" scoped>

</style>
