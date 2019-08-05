<template>
  <div>
    <wizard-nav-header
      :title="title"
      :subtitle="subtitle"
      :step="step"
    />

    <drop-zone
      v-show="!uploadedFile"
      :id="slug"
      :ref="slug"
      :options="dropzoneOptions"
      @vdropzone-complete="uploadSuccess"
    />

    <v-layout
      v-if="uploadedFile"
      align-items
      justify-center
      class="pa-3"
    >
      <v-flex
        lg7
        class="text-xs-center pa-5"
      >
        <v-layout
          row
          wrap
          class="text-xs-center grey lighten-3 px-3 pt-3 pb-2"
        >
          <v-flex xs12>
            <v-img :src="uploadedFile" />
          </v-flex>

          <v-flex
            xs12
            class="uploaded-file-options mt-2"
          >
            <v-layout justify-space-between>
              <v-btn
                flat
                class="red--text"
                @click="removeUploadedFile()"
              >
                <v-icon>close</v-icon>
                Remove
              </v-btn>
              <v-btn
                flat
                class="green--text"
                @click="nextStep()"
              >
                <v-icon>check</v-icon>
                Continue
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// import DropZone from 'vue2-dropzone'
import WizardNavHeader from '../../components/Utility/WizardNavHeader.vue'

export default {
  name: 'Uploader',
  components: {
    WizardNavHeader
  },
  props: {
    subtitle: String,
    title: String,
    slug: String,
    step: String,
    options: Array
  },
  data: function () {
    return {
      uploadedFile: null,
      dropzoneOptions: {
        url: '/customize/design/upload/' + this.slug.replace('upload-', ''),
        thumbnailWidth: 600,
        addRemoveLinks: true,
        headers: {
          // 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
          // 'Authorization': 'Bearer ' + $('meta[name="api_token"]').attr('content'),
        }
      }
    }
  },
  computed: {
    type () {
      return this.slug.replace('upload-', '')
    }
  },
  created () {
    this.uploadedFile = this.$store.state.product[
      'upload_' + this.type + '_file'
    ]
  },
  methods: {
    uploadSuccess (file, response) {
      this.uploadedFile = file.dataURL
      this.$store.dispatch('updateProduct', {
        param: this.slug.replace('-', '_') + '_file',
        value: file.dataURL
      })
      // continue to next step
      // this.$refs[this.slug].removeAllFiles()
      // this.$store.dispatch('nextStep')
    },
    removeUploadedFile () {
      this.uploadedFile = null
      this.$refs[this.slug].removeAllFiles()
      this.$store.dispatch('updateProduct', {
        param: this.slug.replace('-', '_') + '_file',
        value: ''
      })
    },
    nextStep () {
      this.uploadedFile = null
      this.$refs[this.slug].removeAllFiles()
      this.$store.dispatch('nextStep')
      // this.uploadedFile = this.$store.state.product['upload_' + this.type + '_file']
    }
  }
}
</script>
