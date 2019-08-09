<template>
  <div>
    <wizard-nav-header
      :title="title"
      :subtitle="subtitle"
    />

    <div class="row">
      <div
        v-for="item in options"
        :key="item.id"
        class="col-lg-6 p-2"
      >
        <card-block
          :param="'anatomy'"
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
    title: String
  },
  computed: {
    options () {
      return this.$store.state.options.anatomies
    }
  }
}
</script>
