<template>
  <div>
    <wizard-nav-header
      :title="title"
      :subtitle="subtitle"
      :step="step"
    />

    <!-- {{ product }} -->

    <v-layout
      row
      wrap
      align-start
      class="grey lighten-4 mt-5 text-xs-center"
    >
      <v-flex
        xs12
        sm6
        md3
        class="pa-4"
      >
        <v-card
          flat
          class="grey pa-3 lighten-4"
          width="100%"
        >
          <h3 class="grey--text">
            Anatomy
          </h3>
          <p
            class="headline text-capitalize"
            v-text="productAnatomy.name"
          />
          <v-img
            v-if="productAnatomy"
            :src="productAnatomy.icon"
          />
        </v-card>
      </v-flex>
      <v-flex
        xs12
        sm6
        md3
        class="pa-4"
      >
        <v-card
          flat
          class="grey pa-3 lighten-4"
          width="100%"
        >
          <h3 class="grey--text">
            Texture
          </h3>
          <p
            class="headline text-capitalize"
            v-text="productTexture.name"
          />
          <v-img
            v-if="productTexture"
            :src="productTexture.img_path"
          />
        </v-card>
      </v-flex>
      <v-flex
        xs12
        sm6
        md3
        class="pa-4"
      >
        <v-card
          flat
          class="grey pa-3 lighten-4"
          width="100%"
        >
          <h3 class="grey--text">
            Sleve
          </h3>
          <p
            class="headline text-capitalize"
            v-text="productSleve.name"
          />
          <div
            v-if="productSleve"
            class="circle"
            :style="'background-color:' + productSleve.hex + ';'"
          />
        </v-card>
      </v-flex>
      <v-flex
        xs12
        sm6
        md3
        class="pa-4"
      >
        <v-card
          flat
          class="grey pa-3 lighten-4"
          width="100%"
        >
          <h3 class="grey--text">
            Model
          </h3>
          <p
            class="headline text-capitalize"
            v-text="productModel.name"
          />
        </v-card>
      </v-flex>

      <v-flex
        xs12
        md6
        class="pa-4"
      >
        <!-- {{ product }} -->
        <v-card
          flat
          class="grey pa-3 lighten-4"
          width="100%"
        >
          <h3 class="grey--text mb-2">
            Submited Anatomy
          </h3>
          <v-img
            v-if="product.upload_anatomy_file"
            :src="product.upload_anatomy_file"
            alt=""
            class="rounded"
          />
        </v-card>
      </v-flex>
      <v-flex
        xs12
        md6
        class="pa-4"
      >
        <v-card
          flat
          class="grey pa-3 lighten-4"
          width="100%"
        >
          <h3 class="grey--text mb-2">
            Submited Insignia
          </h3>
          <v-img
            v-if="product.upload_insignia_file"
            :src="product.upload_insignia_file"
            alt=""
            class="rounded"
          />
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout
      align-center
      justify-end
      row
      class="mt-4"
    >
      <v-btn
        large
        class="btn btn-default primary white--text rounded"
        @click="$store.dispatch('wizard/nextStep')"
      >
        Complete Order
        <v-icon>arrow_right</v-icon>
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
import WizardNavHeader from '../../components/Utility/WizardNavHeader.vue'
export default {
  components: {
    WizardNavHeader
  },
  props: {
    subtitle: String,
    title: String,
    step: String
  },
  computed: {
    product () {
      return this.$store.state.product
    },
    productAnatomy () {
      return this.$store.state.options.anatomies.find(
        item => item.id === this.product.anatomy
      )
    },
    productTexture () {
      return this.$store.state.options.textures.find(
        item => item.id === this.product.texture
      )
    },
    productSleve () {
      return this.$store.state.options.colors.find(
        item => item.id === this.product.sleve_cover
      )
    },
    productModel () {
      return this.$store.state.options.form_factors.find(
        item => item.id === this.product.femlight_model
      )
    }
  }
}
</script>
