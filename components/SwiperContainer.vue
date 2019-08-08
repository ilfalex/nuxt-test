<template>
  <div
    class="swiper-slide container pt-5"
    style="margin-bottom:100px;"
  >
    <pagination />

    <options-selector
      v-if="step === 0"
      step="0"
      param="anatomy"
      title="Step One: Choose Your Anatomy"
      subtitle="Choose the type of product you want to create."
      :options="$store.state.options.anatomies"
    />

    <options-selector
      v-if="step === 1"
      step="1"
      param="sleve_cover"
      title="Step Two: Choose Your Sleve Cover"
      subtitle="This is where you will be able to choose your sleve cover."
      :options="$store.state.options.colors"
    />

    <texture-selector
      v-if="step === 2"
      step="2"
      param="texture"
      title="Step Three: Choose Texture"
      subtitle="Use the form below to select a texture for the inside of your femlight."
      :options="$store.state.options.textures"
    />

    <options-selector
      v-if="step === 3"
      step="3"
      param="femlight_model"
      title="Step Four: Choose Femlight"
      subtitle="Choose the model casing of your personal femlight."
      :options="$store.state.options.form_factors"
    />

    <media-uploader-dropzone
      v-if="step === 4"
      step="4"
      title="Step Five: Upload Anatomy"
      subtitle="Upload your anatomy here. Use the instructions included below to properly get a complete rendering of your anatomy."
      slug="upload-anatomy"
    />

    <media-uploader-dropzone
      v-if="step === 5"
      step="5"
      title="Step Six: Upload Insignia"
      subtitle="Upload any logos or signatures you would like to place on the product to brand your personal product."
      slug="upload-insignia"
    />

    <confirm-order
      v-if="step === 6"
      step="6"
      title="Step Seven: Confirm Order"
      subtitle="Review your order below and confirm the details are correct before sending in your order."
    />
  </div>
</template>

<script>
import Pagination from './Pagination.vue'
import TextureSelector from './Utility/TextureSelector.vue'
import OptionsSelector from './Utility/OptionsSelectorCard.vue'
import MediaUploaderDropzone from './Utility/MediaUploaderDropzone.vue'
import ConfirmOrder from './Steps/ConfirmOrder.vue'

export default {
  components: {
    OptionsSelector,
    TextureSelector,
    ConfirmOrder,
    MediaUploaderDropzone,
    Pagination
  },
  computed: {
    step () {
      return this.$store.state.step
    }
  },
  mounted () {
    this.$store.dispatch('wizard/fetchOptions')
    // this.$store.dispatch('wizard/fetchActiveProduct')
  }
}
</script>
