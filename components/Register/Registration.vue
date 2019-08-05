<template>
	<div class="text-xs-center pa-3">
		<v-form @submit.prevent="submitForm">
			<v-card
				flat
				color="transparent"
				style="width:500px;margin:auto;"
				class="mt-5"
			>
				<v-toolbar
					flat
					color="transparent"
				>
					<v-toolbar-title class="display-1 font-weight-thin text-xs-center">
						Create Your Account
					</v-toolbar-title>
				</v-toolbar>
				<v-card-text>
					<v-text-field
						prepend-icon="mail"
						name="email"
						label="Email"
						type="email"
						v-model="fields.email"
						:error-messages="errors.get('email')"
					/>
					<v-text-field
						id="password"
						prepend-icon="lock"
						name="password"
						label="Password"
						type="password"
						v-model="fields.password"
						:error-messages="errors.get('password')"
					/>
					<v-text-field
						id="password_confirmation"
						prepend-icon="confirmation_number"
						name="password_confirmation"
						label="Confirm Password"
						type="password"
						v-model="fields.password_confirmation"
						class="hide-icon"
						:error-messages="errors.get('password_confirmation')"
					/>
				</v-card-text>
				<v-card-actions>
					<v-btn
						block
						color="primary"
						type="submit"
					>
						Get Started
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-form>
	</div>
</template>

<script>

import { Errors } from '~/plugins/form-validation.js'
import { login } from '~/plugins/apis/login-api.js'

export default {
	components: {},
	middleware: 'authenticated',
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

<style>
	.hide-icon .v-icon{
		opacity: 0;
	}
</style>