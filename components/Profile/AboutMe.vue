<template lang="html">
  <div
    class="mt-4 text-xs-center"
    min
  >
    <v-carousel
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
              <h4 class="display-2 white--text">
                About Me
              </h4>
              <p v-if="user.about_me" class="headline grey--text">
                {{ user.about_me.bio }}
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
}
</script>

<style lang="css" scoped>
</style>
