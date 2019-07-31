<template>
	<v-navigation-drawer permanent class="queue-bar">
		<v-toolbar flat>
			<v-list>
				<v-list-tile>
					<v-list-tile-title class="title">
						Submissions
					</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-toolbar>

		<v-divider></v-divider>

		<v-tabs
			v-model="active"
			color="cyan"
			dark
			slider-color="yellow"
			centered
		>
			<v-tab
				v-for="( item, index ) in tab_items"
				:key="index"
				ripple
			>
				{{ item.title }} 

			</v-tab>
			<v-tab-item
				v-for="( item, index ) in tab_items"
				:key="index"
			>
				<v-card flat>
					<queue-list
						:endpoint="item.endpoint"
					></queue-list>
				</v-card>
			</v-tab-item>
		</v-tabs>
	</v-navigation-drawer>
</template>

<script>
	import QueueList from '~/components/QueueList.vue'

  	export default {
  		components : {
  			QueueList
  		},
	    data () {
	      return {
	        active: null,
	        tab_items: [
	        	{
	        		title : 'In Queue',
	        		endpoint : '/custodian/queue/pending'
	        	},
	        	{
	        		title : 'Rejected',
	        		endpoint : '/custodian/queue/rejected'
	        	},
	        	{
	        		title : 'Approved',
	        		endpoint : '/custodian/queue/approved'
	        	},
	        ]
	      }
	    },
	    methods: {

	    }
  	}
</script>

<style>
	.queue-bar{
		min-width: 330px;
	}
</style>