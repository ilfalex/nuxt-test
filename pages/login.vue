<template>
			<v-form
				@submit.prevent="submitForm"
				class="login-card-holder"
			>
				<v-card>
					<v-img
						src="/images/login-header.jpeg"
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
										v-model="fields.email"
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
										v-model="fields.password"
										label="Password"
										type="password"
										required
									/>
								</v-flex>
							</v-layout>
						</v-container>
					</v-card-text>

					<v-card-actions>
						<v-layout 
							justify-center
						>
							<v-btn
								color="primary"
								type="submit"
								:loading="loading"
							>
								Login
							</v-btn>
						</v-layout>
					</v-card-actions>
				</v-card>
			</v-form>
</template>

<script>

// import { mapMutations } from 'vuex'
import { user} from '~/plugins/apis/user-api.js'

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
			fields : {
				email: '',
				password: ''
			},
			redirectTo: '/dashboard',
			loading: false
		}
	},
	methods: {
		submitForm () {

			this.loading = true

			user.login( this.fields )
				.then(response => {

			        const auth = {
			            accessToken: response.data.access_token
			        }

					// set auth in store and cookie
      				Cookie.set('auth', auth, {expires: 364})
					this.$store.commit('setAuth', auth)
					
					// redirect to user dashboard
					this.$router.push('/dashboard')
				})
		}	
	}
}

</script>
