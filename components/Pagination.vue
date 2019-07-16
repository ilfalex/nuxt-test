<template>
  <div
    id="wizard-progress"
    :class="[
      'bg-green container-fluid text-xs-center',
      'px-0',
      { 'fixed': isFixed},
    ]"
    style="width:100%;"
  >
    <div
      class="progress bg-green lighten"
      style="height:200px;"
    >
      <div
        class="progress-bar bg-green"
        role="progressbar"
        :style="'width: ' + percentage + '%;'"
        :aria-valuenow="percentage"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <h4
          :class="[
            'display-1',
            { 'pl-3': currentStep.key == 0}
          ]"
        >
          Step {{ currentStep.key + 1 }}/ {{ steps.length }}
          <span class="">
            : {{ currentStep.label }}
          </span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isFixed: true
    }
  },
  computed: {
    steps() {
      return this.$store.state.steps
    },
    percentage() {
      const length = this.$store.state.steps.length
      const percent = this.$store.state.step / (length - 1)
      return percent * 100
    },
    currentStep() {
      let result = this.$store.state.step
      this.$store.state.steps.forEach((item) => {
        if (item.key === this.$store.state.step) {
          result = item
        }
      })
      return result
    }
  }
}
</script>

<style type="text/css">
    #wizard-progress.fixed{
      position: fixed;
      bottom:0px;
      left:0px;
      z-index:100;
      box-shadow: 0px 10px 15px #000000;
    }
    #footer-content {
      margin-bottom:180px;
    }
    .bg-green.lighten {
      background-color: rgb(219,	234, 206) !important;
    }
    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
