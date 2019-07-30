<template>
  <v-form @submit.prevent="submitForm">
    <v-card-text>
      <v-text-field
        v-model="fields.first_name"
        label="First Name"
        :error-messages="errors.get('first_name')"
        @keydown="errors.clear('first_name')"
      />
      <v-text-field
        v-model="fields.last_name"
        label="Last Name"
        :error-messages="errors.get('last_name')"
        required
        @keydown="errors.clear('last_name')"
      />
      <v-text-field
        v-model="fields.address"
        label="Address"
        :error-messages="errors.get('address')"
        required
        @keydown="errors.clear('address')"
      />
      <v-text-field
        v-model="fields.address2"
        label="Unit/Apt. Number"
        :error-messages="errors.get('address2')"
        required
        @keydown="errors.clear('address2')"
      />

      <h3>Create An Alias [Optional]</h3>
      <p>Femlight respects your privacy, which is why we are dedicated to ensuring that your identity is protect. You may create a fake name for yourself or we will generate one for you.</p>

      <v-text-field
        v-model="fields.fake_first_name"
        label="Fake First Name"
        :error-messages="errors.get('fake_first_name')"
        required
      />
      <v-text-field
        v-model="fields.fake_last_name"
        label="Fake Last Name"
        :error-messages="errors.get('fake_last_name')"
        required
      />
    </v-card-text>

    <v-card-actions>
      <v-layout justify-end>
        <v-flex xs2>
          <v-btn
            text
            color="primary"
            type="submit"
            :disabled="errors.any()"
          >
            Next
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-form>
</template>

<script>

import { registrationAPI } from '~/assets/registration-api.js'
import { Errors } from '~/assets/form-validation.js'

export default {
  data () {
    return {
      fields: {
        first_name: '',
        last_name: '',
        address: '',
        address2: '',
        fake_first_name: '',
        fake_last_name: ''
      },
      errors: new Errors()
    }
  },

  beforeCreate () {
    // populate the fields
    registrationAPI.getUserDetails()
      .then((response) => {
        this.fields = response.data
      })
  },
  methods: {
    submitForm (e) {
      registrationAPI.setUserDetails(this.fields)
        .then(response => {
          this.$router.push('/id-front')
        })
        .catch(error => this.errors.record(error.response.data.errors))
    }
  }
}
</script>

<style>
	h3, p{
		text-align: left;
	}
</style>
