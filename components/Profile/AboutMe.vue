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
      <v-carousel-item>
        <v-container
          fill-height
        >
          <v-layout
            align-center
            justify-center
            class="text-xs-center"
          >
            <v-flex>
              <h4 class="display-2 white--text mb-2">
                About Me
              </h4>
              <p
                v-if="user.about_me"
                class="headline grey--text"
              >
                {{ user.about_me.body }}
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>

    <v-layout class="mt-3 text-xs-center">
      <v-flex>
        <v-btn
          large
          class="red--text"
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
      <!-- <edit-text v-if="dialogInterface === 'text'" /> -->
      <!-- <edit-color v-if="dialogInterface === 'color'" /> -->
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  data () {
    return {
      dialog: false,
      dialogInterface: false
    }
  },
  methods: {
    openDialog (type) {
      this.dialog = true
      this.dialogInterface = type
    }
  }
}
</script>

<style lang="css" scoped>
</style>
