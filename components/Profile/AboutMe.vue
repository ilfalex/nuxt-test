<template lang="html">
  <div
    class="mt-4 text-xs-center"
    min
  >
    <v-carousel
      :hide-controls="true"
      :hide-delimiters="true"
      class="grey lighten-3"
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
            class="text-xs-center px-5"
          >
            <v-flex>
              <v-layout column>
                <h4 class="display-2 white--text mb-2">
                  About Me
                  <v-icon
                    class="ml-2 edit-icon about-me"
                    style="position:relative:bottom:10px;"
                  >
                    edit
                  </v-icon>
                </h4>
                <p
                  v-if="user.about_me"
                  class="headline grey--text"
                >
                  {{ user.about_me.body }}
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
          v-if="backgroundImage"
          large
          class="red--text"
          @click="removePhoto()"
        >
          <v-icon>close</v-icon>
          Remove Photo
        </v-btn>
        <v-btn
          v-if="!backgroundImage"
          large
          class=""
          @click="removePhoto()"
        >
          <v-icon>add</v-icon>
          Add Photo
        </v-btn>
        <v-btn
          large
          class=""
          @click="openDialog('text')"
        >
          <v-icon>edit</v-icon>
          Change Text
        </v-btn>
        <v-btn
          large
          class=""
          @click="openDialog('color')"
        >
          <v-icon>edit</v-icon>
          Change Color
        </v-btn>
      </v-flex>
    </v-layout>

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <edit-about-me-text v-if="dialogInterface === 'text'" />
      <edit-color v-if="dialogInterface === 'color'" />
    </v-dialog>
  </div>
</template>

<script>
import EditAboutMeText from '../../components/Profile/Dialog/AboutMe/EditText'
import EditColor from '../../components/Profile/Dialog/AboutMe/EditColor'
export default {
  components: {
    EditAboutMeText,
    EditColor
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
      if (this.user.about_me) {
        return this.user.about_me.background_image
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
    removePhoto () {
      const aboutMe = this.$store.state.profile.user.about_me
      const data = { ...aboutMe,
        ...{
          background_image: ''
        } }
      this.$store.commit('profile/UPDATE_PROFILE', {
        about_me: data
      })
    }
  }
}
</script>

<style lang="css" scoped>
.edit-icon.about-me {
  position: relative;
  bottom:16px;
  right: 8px;
}
</style>
