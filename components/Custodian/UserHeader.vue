<template>
	<v-card>
		<v-list
			subheader
			class="user-list"
		>
			<v-subheader
				class="title"
			>
				User:
			</v-subheader>
			<v-list-tile
				class="no-max-height"
			>
				<v-list-tile-content
					class="no-max-height"
				>
					<v-list-tile-title
						class="no-elipsis"
					>
						<v-icon small>person</v-icon>
						{{ activeUserName }}
					</v-list-tile-title>
					<v-list-tile-sub-title
						class="no-elipsis"
					>
						<v-icon small>email</v-icon>
						{{ activeUserEmail }}
					</v-list-tile-sub-title>
					<v-list-tile-sub-title
						class="no-elipsis"
					>
						<v-icon small>phone</v-icon>
						{{ activeUserPhone }}
					</v-list-tile-sub-title>
				</v-list-tile-content>
				<v-list-tile-content>
					<v-btn
						:disabled="approvalScore == 2"
						v-if="approvalScore != 3"
						color="light-green"
						:loading="loading"
						@click="updateUserStatus"
					>
						Complete Verification
					</v-btn>
					<v-btn
						:disabled="!rejectionsHaveMsgs"
						v-if="approvalScore == 3"
						color="red lighten-1"
						:loading="loading"
						@click="updateUserStatus"
					>
						Send Rejection Notice(s)
					</v-btn>

				</v-list-tile-content>
				<v-list-tile-action>
					<v-btn 
						class="mx-2" 
						fab
						small
						@click="clearActiveUser"
					>
						<v-icon>clear</v-icon>
					</v-btn>
				</v-list-tile-action>
			</v-list-tile>
		</v-list>
	</v-card>
</template>

<script>

	import { custodian } from '~/plugins/apis/custodian-api.js'

	export default{
		data () {
			return {
				loading : false
			}
		},
		computed: {
			activeUserName(){
				return this.$store.state.custodian.activeUser.first_name + ' ' + this.$store.state.custodian.activeUser.last_name
			},
			activeUserEmail(){
				return this.$store.state.custodian.activeUser.email
			},
			activeUserPhone(){
				return this.$store.state.custodian.activeUser.phone
			},
			approvalScore(){
				let lowestApprovalScore = 4
				// loop through all the user docs
				this.$store.state.custodian.activeUser.docs.forEach(function(element){
					if(element.doc_status_id < lowestApprovalScore)
						lowestApprovalScore = element.doc_status_id
				})
				return lowestApprovalScore
			},
			rejectionsHaveMsgs(){
				let haveMsgs = true
				// loop through all the user docs
				this.$store.state.custodian.activeUser.docs.forEach(function(element){
					if( element.doc_status_id === 3 && (element.rejection_msg === null || element.rejection_msg === undefined || !element.rejection_msg) )
						haveMsgs = false
				})
				return haveMsgs
			}
		},
		methods: {
			clearActiveUser(){
				this.$store.commit('custodian/clearActiveUser')
			},
			updateUserStatus(){
				this.loading = true
				custodian.updateUserStatus({ user: this.$store.state.custodian.activeUser })
					.then(response => {
						console.log(response)
					})
					.catch(error => {
						console.log(error)
					})
			}
		}
	}
</script>

<style lang="scss">
	.user-list{
		height: 150px;
	}
	.title{
		margin-bottom: 1.5rem;
	}
	.no-max-height{
		height: auto;
	}
	.no-elipsis{
		overflow: visible;
		display: flex;
		align-items: center;
		margin: .35rem 0;

		i{
			margin-right: 1rem;
		}
	}
</style>