<template>
	<div>
		<v-form @submit.prevent="registration.confirmSubmission">
			<v-alert
				:value="signedPreviously"
				border="top"
				colored-border
				type="success"
				transition="scale-transition"
				class="signed-alert"
			>
		    	You already signed
		    </v-alert>
			<v-btn
				v-if="!signComplete"
				@click="loadDoc"
				:loading="loading"
				:disabled="disabled"
				color="primary"
			>
				{{ btnMessage }}
			</v-btn>
			<v-btn
				v-if="signComplete"
				@click="completeReg"
				color="primary"
			>
				<span
					v-if="!signedPreviously"
				>
					{{ btnMessage }}
				</span>
				<v-icon
					v-else
					class="a-done"
					transition="scale-transition"
				>
					done
				</v-icon>
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
				signComplete: false,
				signedPreviously: false
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
			},

			/**
			 * user has been to this page before and already signed
			 *
			 */
			 previouslySigned( error ){

			 	// set button properties to indicate completion
			 	this.signComplete = 
			 	this.signedPreviously = true
			 	this.disabled = false
			 	this.loading = false

			 	// timeout to automatically take them to the dashboard in 5 seconds
			 	setTimeout(() => {
			 		this.$router.push('/dashboard')
			 	}, 5000)
			 },

			/**
			 * activate the button and allow the user 
			 * to open HelloSign iframe
			 *
			 */
			 activateBtn( url ){
			 
				this.helloSignUrl = url
				// enable the button
				this.loading = false
				this.disabled = false
			 }
		},
		mounted(){

			// init the client
			this.helloSignClient = new HelloSign({
				// load the client id from the env file
			  	clientId: process.env.helloSignClientID
			});

			// get the hellosign url
			registration.getHelloSignUrl()
				.then(response => {
					return this.activateBtn( response.data.url )
				})
				.catch(error => {
					return this.previouslySigned( error.message )
				})
		}
	}
</script>

<style>
	.signed-alert{
		max-width: 250px;
		background-color: #fff !important;
		color:#333 !important;
	}
</style>