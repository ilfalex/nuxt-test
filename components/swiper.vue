<template>
  <div class="swiper-container&quot;">
    <div class="swiper-wrapper">
      <swiper-slide params="here are the params" />

      <!-- <choose-anatomy
                v-if="step === 0"
                options="{{ $options }}"/>
            <sleeve-cover
                v-if="step === 1"
                options="{{ $options }}"/>
            <choose-texture
                v-if="step === 3"
                options="{{ $options }}"/>
            <customize-femlight
                v-if="step === 4"
                options="{{ $options }}"/>
            <upload-anatomy
                v-if="step === 5"/>
            <upload-insignia />
            <confirm-order /> -->
    </div>
  </div>
</template>

<script>
import SwiperSlide from './components/SwiperSlide'
export default {
  components: {
    SwiperSlide
  },
  data: function () {
    return {
      message: 'Hello I am talking from the example component!'
    }
  },
  mounted () {},
  methods: {
    nextStep () {
      this.$appRoot.swiper.nextStep()
    }
  }
}
</script>
