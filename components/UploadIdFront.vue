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

    // get the file from the server
    registrationAPI.getIdImg( this.$props.details.endpoint )
      .then((r) => {
        // console.log({getImgResponse : r})

        if(r.data.hasOwnProperty('local_path')){

          var url = 'http://mike.www.femlight.com/xxx/storage/'+r.data.local_path

          var file = { size: 0, name: "id_img", type: "image/png" , url};

          // console.log(file)
          this.$refs.el.dropzone.emit("addedfile", file);

          // And optionally show the thumbnail of the file:
          this.$refs.el.dropzone.emit("thumbnail", file, url);

          this.$refs.el.dropzone.files.push(file)

          this.$refs.el.dropzone.files[0].previewElement.className += ' dz-complete'

          // set the img id
          this.img_id = r.data.id
        }

      })

      // console.log({refs: this.$refs.el})

    // var file = { size: 0, name: "id_img", type: "image/png" };
    // var url = "https://myvizo.com/img/logo_sm.png";
    // this.$refs.el.dropzone.manuallyAddFile(file, url);


    // Everything is mounted and you can access the dropzone instance
    // const instance = this.$refs.el.dropzone
    // console.log(this)
  },
  methods: {
    uploadComplete: function(response){

      // set the image id
      this.img_id = JSON.parse(response.xhr.response).success.id
      console.log(this)
      this.$refs.el.disable()
    },
    removedFile: function(file){ console.log(file)
      registrationAPI.deleteIdImg( this.$props.details.endpoint )
      this.img_id = false
      this.$refs.el.enable()
    }
  },
  beforeDestroy: function(){
    this.details.endpoint = ''
  }
}
</script>

<style>
  .dz-preview{
    width: 200px;
  }
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
  .dz-image img{
    max-width: 100%;
  }
</style>
