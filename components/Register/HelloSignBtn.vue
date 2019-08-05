<template>
	<div>
		<v-form @submit.prevent="registration.confirmSubmission">
			<v-btn
				@click="loadDoc"
				:loading="loading"
				:disabled="disabled"
				class="primary"
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
				btnMessage: 'Sign Doc'
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
					this.hellowSignCallback()
					console.log(x)
				});
			},
			helloSignCallback(x){

				// update the btn message
				this.loading = false
				this.btnMessage = 'Complete Registration'
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