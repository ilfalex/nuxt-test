<template>
	<v-card>
		<v-img
			:src="docSrc"
		/>

		<v-card-title primary-title>
			<div>
				<h4 class="headline mb-0">
					{{ doc.type }}
				</h4>
			</div>
		</v-card-title>

		<v-card-actions>
			<v-btn
				color="light-green"
				:outline="doc.doc_status_id != 4"
				@click="setDocStatus(4)"
			>
				Approve
			</v-btn>
			<v-btn
				color="red lighten-1"
				@click="setDocStatus(3)"
				:outline="doc.doc_status_id != 3"
			>
				Reject
			</v-btn>
		</v-card-actions>
		<v-card-actions
			v-if="doc.doc_status_id == 3"
		>
			<v-container
				fluid
			>
				<v-layout
					row
				>
					<v-radio-group 
						v-model="reason"
					>
						<v-radio
							v-for="(reason, n) in rejectionReasons"
							:key="n"
							:label="reason"
							:value="reason"
							:name="reason"
						></v-radio>
					</v-radio-group>
				</v-layout>
				<v-layout
					row
				>
					<v-textarea
						outlined
						v-if="reason == 'Other'"
						name="other_reason"
						rows="2"
						label="Reason"
						@keyup="updateRejectionReason"
		        	></v-textarea>
		        </v-layout>
		    </v-container>
		</v-card-actions>
	</v-card>
</template>

<script>

export default {
	props: [
		'doc',
		'i'
	],
	data () {
		return {
			rejectionReasons: [
				'Photo resolution too low or blurry',
				'Key information is obstructed',
				'Name on ID card does not match ',
				'Other'
			]
		}
	},
	computed: {
		docSrc(){
			return 'http://mike.www.femlight.com/xxx/storage/' + this.doc.local_path
		},
		reason: {
			get: function(){
				return this.$store.state.custodian.activeUser.docs[this.i].rejection_msg
			},
			set: function(event){
				this.$store.commit('custodian/setRejectionReason', {
					key: this.i,
					reason: event
				})
			}
		}
	},
	methods: {
		setDocStatus( status ){
			this.$store.commit('custodian/setDocStatus', {
				status,
				key: this.i
			})
		},
		updateRejectionReason(){
			return false
		}
	}
}

</script>


<style>
	.inset{
		margin: 1rem;
		width: 100%;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px inset, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px inset, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px inset;
	}
</style>