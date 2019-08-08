<template>
	<v-dialog
		v-model="dialog"
		persistent
		width="400"
	>
		<v-card>
			<v-card-title class="headline">Your Verification Status Is Pending</v-card-title>

			<v-card-text>
				<p>Your documents are currently under review. Once your age has been verified you will receive a notification via email and may proceed with the creation of your custom anatomy Fleshlight&trade;!</p>
				<v-list>
					<v-list-tile
						v-for="(status, key, index) in verificationStatus"
						:key="key"
					>
						<v-list-tile-avatar>
							<v-icon>{{ verificationIcons[index] }}</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							{{ key }}
						</v-list-tile-content>
						<v-list-tile-action>
							<v-chip
								:color="statusVisuals[status.doc_status - 1].color"
							>
								{{ statusVisuals[status.doc_status - 1].text }}
							</v-chip>
						</v-list-tile-action>
					</v-list-tile>
				</v-list>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
	
	import { user } from '~/plugins/apis/user-api.js'
	
	export default {
		data () {
			return {
				verificationStatus: {},
				statusVisuals: [
					{
						text: 'missing',
						color: 'grey',
					},
					{
						text: 'pending',
						color: 'yellow',
					},
					{
						text: 'rejected',
						color: 'red',
					},
					{
						text: 'approved',
						color: 'green',
					}
				],
				verificationIcons: [
					'recent_actors',
					'credit_card',
					'face',
					'assignment_turned_in'
				],
				dialog: false
			}
		},
		beforeCreate (){
			// get the user verification status
			user.getUserVerification()
				.then(response => {
					this.verificationStatus = response.data

					// loop through the statuses and determine if all == 4
					for( let x in this.verificationStatus ){
						if( this.verificationStatus[x].doc_status < 4 )
							this.dialog = true
					}

				})
		},
		computed: {
			isVerified(){
				// loop through the statuses and determine if all == 4
				for( x in this.verificationStatus ){
					console.log(this.verificationStatus[x].doc_status)
					if( this.verificationStatus[x].doc_status < 4 )
						return false
				}
				return true
			}
		},

		mounted () {
			this.dialog = !this.isVerified
		}
	}
</script>
<style>
	.v-overlay{
		display: none !important;
	}
</style>