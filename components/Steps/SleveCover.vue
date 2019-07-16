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
          :param="'sleve_cover'"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardBlock from '../../components/Utility/CardBlock.vue'
export default {
  components: {
    CardBlock
  },
  props: {
    subtitle: String,
    title: String
  },
  computed: {
    options() {
      return this.$store.state.options.colors
    }
  }
}
</script>
