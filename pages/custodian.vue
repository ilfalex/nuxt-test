<template>
	<v-layout>
		<sidebar />
		<v-container
			fluid
			grid-list-xl
		>
			<v-layout wrap>
				<v-flex
					xs12
				>
					<user-header 
						v-if="activeUser"
					/>
				</v-flex>
				<v-flex 
					xs6
					v-for="(doc, key) in docs"
				>
					<!-- user data -->
					<approval-card 
						:doc="doc"
						:i="key"
					/>
				</v-flex>

				<v-flex xs6>
					<!-- HelloSign button -->
					<v-card>
						<v-card-title>
							Sign Docs
						</v-card-title>

					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-layout>
</template>

<script>

import Sidebar from '~/components/Custodian/Sidebar.vue'
import ApprovalCard from '~/components/Custodian/ApprovalCard.vue'
import UserHeader from '~/components/Custodian/UserHeader.vue'
// import HelloSignBtn from '~/components/Custodian/HelloSignBtn.vue'

export default {
	middleware: 'authenticated',
	layout: 'custodian',
	components: {
		Sidebar,
		UserHeader,
		ApprovalCard,
		// HelloSignBtn
	},
	computed: {
		docs(){
			// return all docs except the hello sign
			if(this.$store.state.custodian.activeUser){
				let a = {}
				const docs = this.$store.state.custodian.activeUser.docs
				for(let i = 0; i < docs.length; i++){
					if(docs[i].doc_type_id != 4)
						// a.push(docs[i])
						a[i] = docs[i]
				}
				return a
			}
			else{ return {} }
		},
		helloSign(){
			if(this.$store.state.custodian.activeUser)
				for(let i = 0; i < docs.length; i++)
					if(docs[i].doc_type_id == 4)
						return docs[i]
		},
		activeUser(){
			return this.$store.state.custodian.activeUser
		}
	}
}

</script>
