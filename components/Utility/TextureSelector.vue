<template>
  <div>
    <wizard-nav-header
      :title="title"
      :subtitle="subtitle"
      :step="step"
    />
    <div class="preview-area mt-5">
      <div
        v-if="!selectedPreview"
        class="preview-box box grey lighten-2 text-center rounded mb-5"
        style="height:256px;"
      >
        <p class="grey--text">
          Select a texture below to preview..
        </p>
      </div>
      <div
        v-if="selectedPreview"
        class="details mb-5 text-xs-center"
      >
        <img
          :src="selectedPreview.img_path"
          class="img-fluid rounded"
          style="height:256px;"
        >
      </div>
    </div>

    <carousel
      :per-page="5"
      :navigation-enabled="true"
    >
      <slide
        v-for="item in options"
        v-if="item.img_path"
        :key="item.id"
      >
        <div @click="setSelection(item)">
          <card-block
            :param="param"
            :item="item"
            :hide-button="true"
            :is-selected="selectedOption && item.id === selectedPreview.id"
          />
        </div>
      </slide>
    </carousel>

    <div
      v-if="selectedPreview"
      class="text-xs-center mt-5"
    >
      <v-btn
        large
        class="btn btn-default primary white--text rounded"
        @click="nextStep()"
      >
        Click here to continue
      </v-btn>
    </div>

    <!-- <div class="container">
      <div class="row">
        <div
          v-for="item in options"
          class="col-md-6 col-lg-4 p-2">
            <div @click="setSelection(item)">
              <card-block
                :param="param"
                :item="item"
                :hide-button="true"/>
            </div>
              <div class="text-center flex">
                <button
                  class="btn btn-default bg-green text-white rounded mb-2"
                  @click="setSelection(item)">Select</button>
              </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel'
import WizardNavHeader from '../../components/Utility/WizardNavHeader.vue'
import CardBlock from '../../components/Utility/CardBlock.vue'
export default {
  components: {
    CardBlock,
    WizardNavHeader
    // WizardNavHeader
  },
  props: {
    subtitle: String,
    title: String,
    param: String,
    options: Array,
    step: String
  },
  data: () => {
    return {
      selectedOption: null,
      selectedPreview: null
    }
  },
  methods: {
    setSelection (item) {
      this.selectedOption = item
      this.setPreview(item)
    },
    setPreview (item) {
      this.selectedPreview = item
    },
    updateProduct (param, value) {
      // alert('editing the product')
      this.$store.dispatch('updateProduct', {
        param: param,
        value: value
      })
      // this.$store.dispatch('nextStep')
    },
    nextStep () {
      this.$store.dispatch('nextStep')
      this.updateProduct(this.param, this.selectedOption)
    }
  }
}
</script>

<style>
.preview-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
