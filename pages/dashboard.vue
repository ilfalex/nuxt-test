<template>
	<v-container>
		<v-layout>
			<h1 v-if="isVerified">the user is verified</h1>
			<h1 v-if="!isVerified">the user is verification is pending or rejected</h1>
		</v-layout>
	</v-container>
</template>

<script>

import { dashboard } from '~/plugins/apis/dashboard-api.js'
import { login } from '~/plugins/apis/login-api.js'

export default {
	layout: 'authenticated',
	middleware: 'authenticated',
	components: {
	},
	data () {
		return {
			verificationStatus: {}
		}
	},
	beforeCreate (){
		// get the user verification status
		login.getUserVerification()
			.then(response => {
				this.verificationStatus = response.data
			})
	},
	computed: {
		isVerified(){
			return this.verificationStatus['lowest'] === 4
		}
	},

	mounted () {
	}
}
</script>
