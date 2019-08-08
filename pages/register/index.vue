
<template>
	<v-layout
		column
		justify-center
		align-center
		fill-height
	>
		<v-flex xs12>
			<v-form
				@submit.prevent="submitForm"
				class="login-card-holder"
			>
				<v-card>
					<v-img
						src="/images/lotus.jpeg"
						aspect-ratio="2.75"
					/>

					<v-card-title primary-title>
						<div>
							<h3 class="headline mb-0">
								Create Your Account
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
										name="email"
										:error-messages="errors.get('email')"
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
										name="password"
										:error-messages="errors.get('password')"
										required
									/>
								</v-flex>
							</v-layout>
							<v-layout>
								<v-flex
									xs12
								>
									<v-text-field
										v-model="fields.password_confirmation"
										label="Confirm Password"
										type="password"
										name="password_confirmation"
										:error-messages="errors.get('password_confirmation')"
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
							>
								Get Started
							</v-btn>
						</v-layout>
					</v-card-actions>
				</v-card>
			</v-form>
		</v-flex>
	</v-layout>
</template>

<script>

import { Errors } from '~/plugins/form-validation.js'
import { user } from '~/plugins/apis/user-api.js'

const Cookie = process.client ? require('js-cookie') : undefined

export default {
	components: {},
	middleware: 'notAuthenticated',
	data: function () {
		return {
			fields: {
				email: '',
				password: '',
				password_confirmation: ''
			},
			errors: new Errors(),
			loading: false
		}
	},
	methods: {
		submitForm (e) {

			this.loading = false

			user.register( this.fields )
				.then(response => {

			        const auth = {
			            accessToken: response.data.access_token
			        }

					// set auth in store and cookie
      				Cookie.set('auth', auth, {expires: 364})
					this.$store.commit('setAuth', auth)

					this.$router.push('/register/user-details')
				})
				.catch(error => this.errors.record(error))
		}
	}
}
</script>