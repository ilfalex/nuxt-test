<template>
  <div>
    <wizard-nav-header
      :title="title"
      :subtitle="subtitle"
      :step="step"
    />
    <v-layout row wrap>
      <v-flex
        sm3
        class="pa-4"
      >
        <v-card class="grey pa-2" width="100%">
          <h3>Anatomy</h3>
        </v-card>
      </v-flex>
      <v-flex
        sm3
        class="pa-4"
      >
        <v-card class="grey pa-2" width="100%">
          <h3>Texture</h3>
        </v-card>
      </v-flex>
      <v-flex
        sm3
        class="pa-4"
      >
        <v-card class="grey pa-2" width="100%">
          <h3>Sleve</h3>
        </v-card>
      </v-flex>
      <v-flex
        sm3
        class="pa-4"
      >
        <v-card class="grey pa-2" width="100%">
          <h3>Submitted Anatomy</h3>
        </v-card>
      </v-flex>

      <v-flex
        sm6
        class="pa-4"
      >
        <v-card class="grey pa-2" width="100%">
          <h3>Submited Insignia</h3>
        </v-card>
      </v-flex>
      <v-flex
        sm6
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
      console.log(this.$store.state.product)
      return this.$store.state.product
    }
  }
}
</script>
