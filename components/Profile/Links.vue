<template lang="html">
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="item in user.links"
        :key="item.id"
        sm6
        class="pa-3"
      >
        <div class="grey lighten-4 pa-4 text-xs-center">
          <v-icon>{{ item.icon }}</v-icon>
          <h3 class="title font-weight-thin mb-3">
            {{ item.title }}
          </h3>
          <p>{{ item.url }}</p>
          <v-btn
            small
            class="red--text"
            @click="removeLink(item)"
          >
            <v-icon class="mr-1">
              close
            </v-icon>
            Remove
          </v-btn>
          <v-btn small>
            <v-icon class="mr-1">
              edit
            </v-icon>
            Edit
          </v-btn>
          <v-btn small>
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
  },
  methods: {
    removeLink (item) {
      this.user.links.splice(this.user.links.indexOf(item), 1)
    }
  }
}
</script>

<style lang="css" scoped>

</style>
