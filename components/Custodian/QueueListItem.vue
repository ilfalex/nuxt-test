<template>
	<div>
		<v-list-tile
			@click="updateActiveUser"
			:class="{'green-item': isActive}"
		>
			<v-list-tile-content>
				<v-list-tile-title>
					{{ user.first_name }} {{ user.last_name }}
				</v-list-tile-title>
				<v-list-tile-sub-title>
					Email: <span class="grey--text text--lighten-1">{{ user.email }}</span>
				</v-list-tile-sub-title>
			</v-list-tile-content>

			<v-list-tile-action>
				<v-list-tile-action-text>
					{{ lastUpdate }}
				</v-list-tile-action-text>
				<v-icon>launch</v-icon>
			</v-list-tile-action>
		</v-list-tile>
	</div>
</template>

<script>

import moment from 'moment'

export default {
	props: [
		'user'
	],
	data () {
		return {
			
		}
	},
	computed: {
		lastUpdate () {
			return moment(this.user.docs[this.user.docs.length - 1].updated_at).fromNow()
		},
		isActive : {
			get: function(){
				return JSON.stringify(this.user) === JSON.stringify(this.$store.state.custodian.activeUser)
			},
			set: function(val){
				return false
			}
		}
	},
	mounted () {
		// console.log(this.user)
	},
	methods: {
		updateActiveUser () {
				this.isActive = true
				this.$store.commit('custodian/setActiveUser', this.user)
		}
	}
}
</script>

<style>
	.green-item{
		background-color: #eee;
	}
</style>