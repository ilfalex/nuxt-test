<template>
  <div>
    <v-card-text>
      <dropzone
        id="foo"
        ref="el"
        :options="options"
        :destroy-dropzone="true"
      />
    </v-card-text>

    <v-card-actions>
      <v-layout justify-center>
        <v-flex xs2>
          <v-btn
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

export default {
  components: {
    Dropzone
  },
  data () {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: 'http://httpbin.org/anything'
      }
    }
  },
  mounted () {
    // Everything is mounted and you can access the dropzone instance
    // const instance = this.$refs.el.dropzone
  }
}
</script>
