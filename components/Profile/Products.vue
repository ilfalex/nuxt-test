<template lang="html">
  <div>
    <v-layout
      align-center
      justify-center
      row
      wrap
    >
      <v-flex
        v-for="item in user.products"
        :key="item.id"
        sm4
        class="pa-3 text-xs-center"
      >
        <div class="grey pa-3">
          <h4 class="display-2">
            {{ item.name }}
          </h4>
        </div>
        <v-btn
          class="red--text"
          @click="removeProduct(item)"
        >
          <v-icon>close</v-icon>
          <!-- Remove Product -->
        </v-btn>
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
    removeProduct (item) {
      this.user.products.splice(this.user.products.indexOf(item), 1)
    }
  }
}
</script>

<style lang="css" scoped>

</style>
