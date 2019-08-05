<template>
	<div>
		<v-form @submit.prevent="registration.confirmSubmission">
			<v-btn
				@click="loadDoc"
				:loading="loading"
				:disabled="disabled"
				class="primary"
				v-if="!signComplete"
			>
				{{ btnMessage }}
			</v-btn>
			<v-btn
				v-if="signComplete"
				@click="completeReg"
			>
				{{ btnMessage }}
			</v-btn>
		</v-form>
	</div>
</template>

<script>

	import { registration } from '~/plugins/apis/registration-api.js'
	let HelloSign = {}
	if (process.client) {
		HelloSign = require('hellosign-embedded');
	}
	
	export default{
		data () {
			return {
				loading: true,
				disabled: true,
				helloSignUrl : '',
				helloSignClient: {},
				btnMessage: 'Sign Doc',
				signComplete: false
			}
		},
		methods: {
			loadDoc(){
				this.loading = true

				// open the shizzz
				this.helloSignClient.open(this.helloSignUrl, {
					testMode: true
				});

				// set the callback
				this.helloSignClient.on('sign', (x) => {
					// x = {signatureId}
					this.helloSignCallback()
				});
			},
			helloSignCallback(){

				// update the btn message
				this.loading = false
				this.signComplete = true
				this.btnMessage = 'Complete Registration'
			},
			completeReg(){
				this.loading = true
				registration.confirmSubmission()
					.then(() => {
						this.$router.push('/dashboard')
					})
			}
		},
		mounted(){

			// init the client
			this.helloSignClient = new HelloSign({
			  	clientId: process.env.helloSignClientID
			});

			// get the hellosign url
			registration.getHelloSignUrl()
				.then(response => {
					this.helloSignUrl = response.data
					// enable the button
					this.loading = false
					this.disabled = false
				})
		}
	}
</script>