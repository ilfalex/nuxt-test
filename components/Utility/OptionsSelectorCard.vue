<template>
  <div>
    <wizard-nav-header
      :title="title"
      :subtitle="subtitle"
      :step="step"
    />

    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="item in options"
        :key="item.id"
        sm4
        class="pa-2"
      >
        <card-block
          :param="param"
          :item="item"
        />
      </v-flex>
    </v-layout>
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
