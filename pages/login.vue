<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex xs12>
      <v-form
        v-model="valid"
        @submit.prevent="submitForm"
      >
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
            aspect-ratio="2.75"
          />

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                User Login
              </h3>
            </div>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-layout>
                <v-flex
                  xs12
                >
                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                  />
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex
                  xs12
                >
                  <v-text-field
                    v-model="password"
                    label="Password"
                    type="password"
                    required
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-btn
              flat
              color="orange"
              type="submit"
            >
              submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>

// import { mapMutations } from 'vuex'
import { login } from '~/assets/login.js'

// get the cookie object
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  components: {
    //
  },
  data: function () {
    return {
      drawer: false,
      valid: false,
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm () {
      console.log('submitting the form')

      // event.preventDefault()

      login.login(this.email, this.password)
        .then((res) => {
			        const auth = {
			          	accessToken: res.data.access_token
			        }
			        this.$store.commit('setAuth', auth) // mutating to store for client rendering
			        Cookie.set('auth', auth) // saving token in cookie for server rendering
			        this.$router.push('/user-details')
        })
        .catch((res) => {
          console.log({
            fail: res
          })
        })
    }
  }
}

</script>

<style>

	.v-card{
		width: 400px;
	}
</style>
