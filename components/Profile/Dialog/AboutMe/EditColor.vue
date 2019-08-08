<template lang="html">
  <v-card>
    <v-card-title
      class="headline grey lighten-2"
      primary-title
    >
      Edit Color
    </v-card-title>

    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="(color, i) in allColors"
        :key="i"
        xs3
      >
        <div
          v-for="(hue, x) in color"
          :key="x"
          class="pa-2"
          :style="'background-color:' + hue + ';'"
          @click="setColor(hue)"
        >
          {{ hue }}
        </div>
      </v-flex>
    </v-layout>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        flat
        @click="dialog = false"
      >
        I accept
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// import allColors from './colors.json'
import allColors from 'vuetify/es5/util/colors'
export default {
  data () {
    return {
      allColors: allColors
    }
  },
  mounted () {
    console.log({
      allColors
    })
  },
  methods: {
    setColor (data) {
      // this.$store.dispatch('wizard/updateProfile', {
      //   param: 'about_me',
      //   value: data,
      // })
      // alert(data)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
