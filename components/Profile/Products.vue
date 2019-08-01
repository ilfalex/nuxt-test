<template lang="html">
  <div>
    <v-layout justify-end>
      <v-btn @click="addPhotos()">
        <v-icon>add</v-icon>
        Add Products
      </v-btn>
    </v-layout>
    <v-layout
      align-center
      justify-center
      row
      wrap
    >
      <v-flex
        v-for="item in user.products"
        :key="item.id"
        md6
        sm12
        class="pa-3 text-xs-left"
      >
        <v-card
          class="mx-auto full-width"
        >
          <carousel
            :per-page="1"
          >
            <slide
              v-for="(image, i) in item.images"
              :key="i"
            >
              <v-img
                class="white--text"
                height="300px"
                :src="image"
              />
            </slide>
          </carousel>

          <v-card-title class="align-end fill-height">
            {{ item.name }}
          </v-card-title>

          <v-card-text>
            <v-layout
              row
              wrap
            >
              <v-flex xs10>
                <span class="text--primary headline">{{ item.name }}</span><br>
                <span class="text--primary title">
                  {{ item.description }}
                </span>
              </v-flex>
              <v-flex
                xs2
                class="text-xs-right"
              >
                <span class="text--primary display-1">${{ item.price || 0 }}</span>
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-card-actions>
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
              <v-icon class="mr-2">
                edit
              </v-icon>
              Edit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <edit-product :selected-item="selectedItem" />
    </v-dialog>
  </div>
</template>

<script>
import EditProduct from '@/components/Profile/Dialog/Products/EditProduct'
export default {
  components: {
    EditProduct
  },
  props: {
    user: Object
  },
  data () {
    return {
      dialog: false,
      selectedItem: {}
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
  .VueCarousel-dot-container {
    margin-top:0px;
  }
  .full-width {
    width:100%;
  }
</style>
