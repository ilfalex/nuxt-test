<template lang="html">
  <v-carousel>
    <v-carousel-item
      :src="user.hero_image"
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
            <h4 class="display-2 white--text">
              {{ user.fakename }}
            </h4>
            <p class="headline grey--text">
              {{ user.professional_title }}
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
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
