<template lang="html">
  <v-card @keydown.enter="saveProduct()">
    <v-card-title
      class="headline grey lighten-2"
      primary-title
    >
      Edit Product
    </v-card-title>

    <div class="pa-4">
      <v-text-field
        v-model="selectedItem.name"
        label="Title"
      />
      <v-text-field
        v-model="selectedItem.description"
        label="Description"
      />
      <v-text-field
        v-model="selectedItem.price"
        label="Price"
      />
      <v-text-field
        v-model="selectedItem.url"
        label="Link URL"
      />
    </div>
    <div class="">
      <v-layout
        row
        wrap
      >
        <v-flex
          v-for="(image, i) in selectedItem.images"
          :key="i"
          xs6
          class="pa-2 text-xs-center"
        >
          <v-img :src="image" />
          <v-btn
            flat
            small
            class="red--text"
            @click="removePhoto(image, selectedItem)"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </div>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        flat
        @click="saveProduct()"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    selectedItem: Object
  },
  computed: {
    user: {
      get () {
        return this.$store.state.profile.user
      },
      set (value) {
        return this.$store.commit('SET_USER', value)
      }
    }
  },
  methods: {
    saveProduct () {
      this.$parent.$parent.$parent.dialog = false
    },
    removePhoto (image, product) {
      // find the product
      const selectedProduct = this.$store.state.profile.user.products.find(item => item.id === product.id)

      // remove the product from the store
      selectedProduct.images.splice(selectedProduct.images.indexOf(image), 1)
      console.log({
        selectedProduct
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
