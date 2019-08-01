<template lang="html">
  <div class="">
    <v-card
      class="pa-3"
    >
      <v-card-title primary-title>
        <h4 class="title">
          Add New Photos
        </h4>
      </v-card-title>
      <v-layout
        v-if="!upload_method"
        row
        wrap
      >
        <v-flex
          xs6
          class="pa-3"
        >
          <v-btn
            block
            @click="setUploadType('file')"
          >
            Upload File
          </v-btn>
        </v-flex>
        <v-flex
          xs6
          class="pa-3"
        >
          <v-btn
            block
            @click="setUploadType('instagram')"
          >
            Import via Instagram
          </v-btn>
        </v-flex>
      </v-layout>
      <upload-file v-if="upload_method==='file'" />
      <import-instagram v-if="upload_method==='instagram'" />
    </v-card>
  </div>
</template>

<script>
import UploadFile from '@/components/Utility/PhotoUploader/UploadFile'
import ImportInstagram from '@/components/Utility/PhotoUploader/ImportInstagram'
export default {
  components: {
    UploadFile,
    ImportInstagram
  },
  data () {
    return {
      upload_method: false
    }
  },
  created () {
    this.upload_method = false
  },
  methods: {
    setUploadType (type) {
      this.upload_method = type
    }
  }
}
</script>

<style lang="css" scoped>
</style>
