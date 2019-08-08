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


	import { custodian } from '~/plugins/apis/custodian-api.js';
	import QueueListItem from '~/components/Custodian/QueueListItem.vue'
	
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

				custodian.fetchQueue( this.endpoint )
					.then((res) => {
						// console.log(res)
						this.$data.queueItems = res.data
					})
			}
		},
	    mounted: function(){

	    	this.update()
	    }
	}

</script>