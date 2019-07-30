<template>
  <div>
    <v-card-text>
      <dropzone
        id="foo"
        ref="el"
        :options="options"
        :destroy-dropzone="true"
        @vdropzone-complete="uploadComplete"
        @vdropzone-removed-file="removedFile"
      />
    </v-card-text>

    <v-card-actions>
      <v-layout justify-center>
        <v-flex xs2>
          <v-btn
            to="/user-details"
            text
            color="normal"
          >
            Previous
          </v-btn>
        </v-flex>
        <v-flex xs2>
          <v-btn
            text
            color="primary"
            type="submit"
          >
            Next
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </div>
</template>

<script>

import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
import { registrationAPI } from '~/assets/registration-api.js'

export default {
  components: {
    Dropzone
  },
  data () {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        addedFile: function(file){ alert(file); console.log(file) },
        url: process.env.baseUrl + '/register/id/front',
        timeout: 4000000,
        method: 'post',
        headers: {
          Authorization: 'Bearer ' + this.$store.state.auth.accessToken
        },
        paramName: 'id_img',
        addRemoveLinks: true,
        maxFiles: 1
      },
      img_id: 0
    }
  },
  mounted () {
    // Everything is mounted and you can access the dropzone instance
    // const instance = this.$refs.el.dropzone
    console.log(process.env.baseUrl)
  },
  methods: {
    uploadComplete: function(response){

      // set the image id
      this.img_id = JSON.parse(response.xhr.response).success.id
    },
    removedFile: function(file){
      registrationAPI.deleteIdImg('front')
    }
  }
}
</script>
