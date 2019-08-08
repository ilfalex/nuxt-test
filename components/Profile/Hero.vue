<template lang="html">
  <div class="">
    <v-carousel
      :hide-controls="true"
      :hide-delimiters="true"
    >
      <v-carousel-item
        :src="backgroundImage"
      >
        <v-container
          fill-height
        >
          <v-layout
            align-center
            justify-center
            class="text-xs-center"
          >
            <v-flex>
              <v-layout column>
                <h4 class="display-2 white--text">
                  {{ user.stage_name }}
                </h4>
                <p class="headline grey--text">
                  {{ user.professional_title }}
                </p>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>

    <v-layout class="mt-3 text-xs-center">
      <v-flex>
        <v-btn
          v-if="!backgroundImage"
          large
          class=""
        >
          <v-icon
            @click="launchPhotoUpload()"
          >
            add
          </v-icon>
          Add Photo
        </v-btn>
        <v-btn
          v-if="backgroundImage"
          large
          class="red--text"
          @click="removePhoto()"
        >
          <v-icon>close</v-icon>
          Remove Photo
        </v-btn>
        <v-btn
          large
          class=""
          @click="openDialog('text')"
        >
          <v-icon>edit</v-icon>
          Change Text
        </v-btn>
        <!-- <v-btn
          large
          class=""
          @click="openDialog('color')"
        >
          <v-icon>edit</v-icon>
          Change Color
        </v-btn> -->
      </v-flex>
    </v-layout>

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <edit-text v-if="dialogInterface === 'text'" />
      <edit-color v-if="dialogInterface === 'color'" />
    </v-dialog>
  </div>
</template>

<script>
import EditText from '../../components/Profile/Dialog/Hero/EditText'
export default {
  components: {
    EditText
  },
  props: {
    user: Object
  },
  data () {
    return {
      dialog: false,
      dialogInterface: false
    }
  },
  computed: {
    backgroundImage () {
      if (this.user && this.user.hero_image) {
        return this.user.hero_image
      } else {
        return ''
      }
    }
  },
  methods: {
    openDialog (type) {
      this.dialog = true
      this.dialogInterface = type
    },
    launchPhotoUpload () {
      this.openDialog('upload_photo')
    },
    removePhoto () {
      this.$store.commit('wizard/UPDATE_PROFILE', {
        hero_image: false
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
