<template>
	<v-list two-line>
		<queue-list-item
			v-for="(value, name) in queueItems"
			:user="value"
			:key="name"
		>
		</queue-list-item>
	</v-list>
</template>


<script>


	import { custodianAPI } from '~/assets/custodian-api.js';
	import QueueListItem from '~/components/QueueListItem.vue'
	
	export default {
		components : {
			QueueListItem
		},
		props : [
			'endpoint'
		],
		data () {
			return {
				queueItems : [

				]
			}
		},
		methods : {

			/**
			 *	update the list
			 */
			update (){

				custodianAPI.fetchQueue( this.endpoint )
					.then((res) => {

						this.$data.queueItems = res.data
					})
			}
		},
	    mounted: function(){

	    	this.update()
	    }
	}

</script>