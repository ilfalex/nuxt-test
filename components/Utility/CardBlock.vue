<template>
  <v-card
    flat
    color="transparent"
    :class="['p-4 mb-2 text-xs-center rounded',
             { slideColor: (isSelected) },
             { '': !hasHex }
    ]"
    :style="(isSelected? slideColor : '') + 'width:100%;'"
  >
    <img id="asdlkfj" :src="image" class="img-responsive rounded" style="max-width:200px;">
    <div v-if="hasHex" class="text-xs-center">
      <div class="circle" :style="slideColor" />
    </div>
    <h4
      :class="[
        'text-capitalize title my-3',
      ]"
    >
      {{ item.name }}
    </h4>
    <v-btn
      v-if="!hideButton"
      class="btn btn-default green white--text rounded mb-2"
      @click="updateProduct(param, item)"
    >
      Select
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object,
    hideButton: Boolean,
    isSelected: Boolean,
    param: String
  },
  computed: {
    hasHex() {
      return !(this.item.hex === undefined)
    },
    slideColor() {
      if (this.hasHex) {
        return 'background-color:' + this.item.hex + ';'
      } else if (this.isSelected) {
        return 'background-color:#76BC43;'
      } else {
        return 'background-color:transparent;'
      }
    },
    image() {
      if (this.item.icon) {
        return this.item.icon
      }
      if (this.item.img_path) {
        return this.item.img_path
      }
      return false
    }
  },
  mounted() {},
  methods: {
    nextStep() {
      this.$store.dispatch('nextStep')
    },
    updateProduct(param, value) {
      this.$store.dispatch('updateProduct', {
        param: param,
        value: value
      })
      this.nextStep()
    }
  }
}
</script>

<style>
  .btn.rounded {
    border-radius:2em !important;
  }
  .circle {
    margin: auto;
    border-radius:50%;
    height: 150px;
    width: 150px;
  }
</style>
