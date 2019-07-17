<template>
  <div>
    <wizard-nav-header
      :title="title"
      :subtitle="subtitle"
      :step="step"
    />

    {{ product }}

    <v-layout row wrap align-start>
      <v-flex
        xs12
        sm6
        md3
        class="pa-4"
      >
        <v-card class="grey pa-2" width="100%">
          <h3>Anatomy</h3>
          {{ productAnatomy }}
        </v-card>
      </v-flex>
      <v-flex
        xs12
        sm6
        md3
        class="pa-4"
      >
        <v-card class="grey pa-2" width="100%">
          <h3>Texture</h3>
          {{ productTexture }}
        </v-card>
      </v-flex>
      <v-flex
        xs12
        sm6
        md3
        class="pa-4"
      >
        <v-card class="grey pa-2" width="100%">
          <h3>Sleve</h3>
          {{ productSleve }}
        </v-card>
        </v-flex>
      <v-flex
        xs12
        sm6
        md3
        class="pa-4"
      >
        <v-card class="grey pa-2" width="100%">
          <h3>Model</h3>
          {{ productModel }}
        </v-card>
      </v-flex>

      <v-flex
        xs12
        md6
        class="pa-4"
      >
        <v-card class="grey pa-2" width="100%">
          <h3>Submited Insignia</h3>
        </v-card>
      </v-flex>
        <v-flex
        xs12
        md6
        class="pa-4"
      >
        <v-card class="grey pa-2" width="100%">
          <h3>Model</h3>
        </v-card>
      </v-flex>
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
    product() {
      return this.$store.state.product
    },
    productAnatomy() {
      return this.$store.state.options.anatomies.find(
        item => item.id === this.product.anatomy
      )
    },
    productTexture() {
      return this.$store.state.options.anatomies.find(
        item => item.id === this.product.texture
      )
    },
    productSleve() {
      return this.$store.state.options.anatomies.find(
        item => item.id === this.product.sleve_cover
      )
    },
    productModel() {
      return this.$store.state.options.anatomies.find(
        item => item.id === this.product.femlight_model
      )
    }
  }
}
</script>
