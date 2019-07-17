<template>
  <div>
    <div class="nav-bar py-3">
      <div>
        <v-btn
          v-show="$store.state.step !== 0"
          class="btn btn-default primary text-white rounded"
          href="#"
          @click="go('prevStep')"
        >
          Prev
        </v-btn>
      </div>
      <h4 class="display-1 text-green hidden-xs-only">
        {{ title }}
      </h4>
      <div>
        <v-btn
          v-show="isAllowedToContinue"
          class="btn btn-default primary text-white rounded"
          href="#"
          @click="go('nextStep')"
        >
          Next
        </v-btn>
      </div>
    </div>
    <div class="text-xs-center">
      <p class="title">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subtitle: String,
    title: String,
    step: String
  },
  computed: {
    isAllowedToContinue() {
      // needs to check what the current step is
      let result = false
      let stepData
      const currentStep = this.step
      // needs to grab the step data from the store
      this.$store.state.steps.forEach((item) => {
        if (parseInt(currentStep) === item.key) {
          stepData = item
        }
      })
      // check the step data to confirm that the required info is set for the relative step
      if (stepData && stepData.required) {
        stepData.required.forEach((res) => {
          if (this.$store.state.product[res]) {
            console.log('it EXISTS!!', res)
            result = true
          } else {
            console.log('it does not exist', res)
            result = false
          }
        })
      }
      return result
    }
  },
  mounted() {},
  methods: {
    go(action) {
      event.preventDefault()
      this.$store.dispatch(action)
    }
  }
}
</script>
<style>
	.nav-bar {
		display:flex;
		align-items:center;
		justify-content:space-between;
	}
</style>
