<template lang="html">
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="item in user.links"
        :key="item.id"
        sm4
        class="pa-3"
      >
        <div class="grey lighten-4 pa-4 text-xs-center">
          <h3 class="display-2 font-weight-thin mb-3">
            {{ item.name }}
          </h3>
          <v-btn>
            <v-icon class="mr-1">
              edit
            </v-icon>
            Edit
          </v-btn>
          <v-btn>
            <v-icon class="mr-1">
              link
            </v-icon>
            Preview
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
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
