<template>
  <div>
    <wizard-nav-header
      :title="title"
      :subtitle="subtitle"
      :step="step"
    />

    <div class="row">
      <div
        v-for="item in options"
        class="col-md-6 col-lg-4 p-2"
      >
        <card-block
          :param="param"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardBlock from '../../components/Utility/CardBlock.vue'
import WizardNavHeader from '../../components/Utility/WizardNavHeader.vue'
export default {
  components: {
    CardBlock,
    WizardNavHeader
  },
  props: {
    subtitle: String,
    title: String,
    param: String,
    options: Array,
    step: String
  }
}
</script>
