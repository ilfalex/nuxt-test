<template>
  <div>
    <wizard-nav-header
      :title="title"
      :subtitle="subtitle"
      :step="step"
    />

    <!-- Anatomy -->
    <!-- Texture -->
    <!-- Sleve Cover -->
    <!-- Femlight Model -->
    This is where you confirm your order

    {{ product }}

    <div class="row">
      <div class="col-md-6">
        <img :src="product.upload_anatomy_file" class="img-responsive">
      </div>
      <div class="col-md-6">
        <img :src="product.upload_insignia_file" class="img-responsive">
      </div>
    </div>

    div
  </div>
</template>

<script>
export default {
  props: {
    subtitle: String,
    title: String,
    step: String
  },
  components: {
    WizardNavHeader: require('../../components/Utility/WizardNavHeader.vue')
  },
  computed: {
    product() {
      console.log(this.$store.state.product)
      return this.$store.state.product
    }
  }
}
</script>
