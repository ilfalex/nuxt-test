<template>
  <div>
    <h4>HELLO</h4>
    <div class="nav-bar py-3">
      <div>
        <a
          v-show="$store.state.step !== 0"
          class="btn btn-default bg-green text-white rounded"
          href="#"
          @click="go('prevStep')"
        >
          Prev
        </a>
      </div>
      <h4 class="text-green">
        {{ title }}
      </h4>
      <div>
        <a
          v-show="isAllowedToContinue"
          class="btn btn-default bg-green text-white rounded"
          href="#"
          @click="go('nextStep')"
        >
          Next
        </a>
      </div>
    </div>
    <div class="text-center">
      <p class="lead">
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
      let result
      let stepData
      const currentStep = this.step
      // needs to grab the step data from the store
      this.$store.state.steps.forEach((item) => {
        if (currentStep === item.key) {
          stepData = item
        }
      })
      // check the step data to confirm that the required info is set for the relative step
      if (stepData && stepData.required) {
        stepData.required.forEach((res) => {
          if (this.$store.state.product[res]) {
            // console.log('it EXISTS!!', res)
            result = true
          } else {
            // console.log('it does not exist', res)
            result = false
          }
        })
      }
      return result
    }
  },
  mounted() {
    console.log({
      state: this.$store.state
    })
  },
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
