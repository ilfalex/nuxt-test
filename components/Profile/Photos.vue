<template lang="html">
  <div>
    <v-layout justify-end>
      <v-btn @click="addPhotos()">
        <v-icon>add</v-icon>
        Add Photos
      </v-btn>
    </v-layout>
    <v-layout
      v-if="user.images && user.images.length > 0"
      row
      wrap
    >
      <v-flex
        v-for="item in user.images"
        :key="item.id"
        sm4
        class="pa-3"
      >
        <v-card style="width:100%;">
          <v-layout column>
            <v-img
              v-if="item.url"
              :src="item.url"
              :height="200"
              style="width:100%;"
            />
            <div class="">
              <v-btn
                class="red--text"
                @click="removePhoto(item)"
              >
                <v-icon>close</v-icon>
              </v-btn>
            </div>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-flex xs12>
        <p class="grey--text headline font-weight-thin text-xs-center">You have no photos added to your profile.</p>
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
      this.$store.dispatch('profile/removePhoto', item)
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
