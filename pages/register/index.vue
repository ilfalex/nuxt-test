
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
import { login } from '~/plugins/apis/login-api.js'

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
			errors: new Errors()
		}
	},
	methods: {
		submitForm (e) {

			const args = {
				fields : this.fields,
				store : this.$store,
				router : this.$router
			}

			login.register( args )
				.catch(error => this.errors.record(error.response.data.errors))
		}
	}
}
</script>