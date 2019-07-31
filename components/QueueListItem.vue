<template>
	<div>
		<v-list-tile
			@click=""
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
		props : [
			'user'
		],
		data(){
			return {

			}
		},
		methods : {

		},
		mounted(){
			console.log(this.user)
		},
		computed : {
			lastUpdate(){
				// return 'yo';
				// console.log(this.user.docs[1])
				return moment(this.user.docs[ this.user.docs.length - 1 ].updated_at).fromNow()
			}
		}
	}
</script>