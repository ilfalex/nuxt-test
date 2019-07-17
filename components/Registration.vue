<template>
  <div
    class="text-xs-center pa-3">
    <v-card
      flat
      color="transparent"
      style="width:500px;margin:auto;"
      class="mt-5">
      <v-toolbar flat color="transparent">
        <v-toolbar-title class="display-1 font-weight-thin text-xs-center">
          Create Your Account
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="person" name="fullname" label="Full Name" type="text" />
          <v-text-field prepend-icon="mail" name="email" label="Email" type="email" />
          <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          block
          color="primary"
          @click="$router.push('/registration')"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
      message: 'Hello I am talking from the example component!'
    }
  },
  mounted() {
  },
  methods: {
    nextStep() {
      this.$appRoot.swiper.nextStep()
    }
  }
}
</script>
