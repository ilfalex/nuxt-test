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
      <v-layout justify-space-between>
        <v-flex xs2>
          <v-btn
            :to="details.prev"
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
            :to="details.next"
            type="submit"
            :disabled="!img_id"
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
  props: {
    details : {}
  },
  data () {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: process.env.baseUrl + this.$props.details.endpoint,
        timeout: 4000000,
        method: 'post',
        headers: {
          Authorization: 'Bearer ' + this.$store.state.auth.accessToken
        },
        paramName: 'id_img',
        addRemoveLinks: true
      },
      img_id: false
    }
  },
  mounted () {
    // Everything is mounted and you can access the dropzone instance
    // const instance = this.$refs.el.dropzone
    console.log(this)
  },
  methods: {
    uploadComplete: function(response){

      // set the image id
      this.img_id = JSON.parse(response.xhr.response).success.id
      console.log(this)
      this.$refs.el.disable()
    },
    removedFile: function(file){
      registrationAPI.deleteIdImg( this.$props.details.endpoint )
      this.img_id = false
      this.$refs.el.enable()
    }
  }
}
</script>

<style>
  .dz-details{
    background-color: #94d31b !important
  }
  .dz-filename{
    display: none;
  }
  .dz-size{
    display: none;
  }
  .dz-remove{
    top: 50% !important;
    bottom: inherit !important;
    left: 50%;
    margin-left: -56px !important;
    margin-top: -20px;
    text-decoration: none !important;
    transition: 300ms ease;
  }
  .dz-remove:hover{
    background-color: rgba(255,255,255,0.2);
  }
</style>
