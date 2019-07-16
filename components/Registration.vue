<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <div class="text-xs-center mb-5">
          <img width="400px" src="http://alex.www.femlight.com/customize/storage/femlight-logo-02_grayPink.png" />
        </div>
        <v-card flat class="elevation-12">
          <v-toolbar flat color="white">
            <v-toolbar-title>Create Your Account</v-toolbar-title>
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
            color="primary">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
