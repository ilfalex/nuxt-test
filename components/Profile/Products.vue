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
        <v-btn
          @click="editProduct(item)"
        >
          <v-icon class="mr-2">edit</v-icon>
          Edit
        </v-btn>
      </v-flex>
    </v-layout>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <edit-text :selectedItem="selectedItem"/>
    </v-dialog>
  </div>
</template>

<script>
import EditText from '@/components/Profile/Dialog/Products/EditProduct'
export default {
  props: {
    user: Object
  },
  components: {
    EditText
  },
  data () {
    return {
      dialog: false,
      selectedItem: true
    }
  },
  methods: {
    removeProduct (item) {
      this.user.products.splice(this.user.products.indexOf(item), 1)
    },
    editProduct (item) {
      this.selectedItem = item
      this.dialog = true
    }
  }
}
</script>

<style lang="css" scoped>

</style>
