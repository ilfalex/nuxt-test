<template>
	<v-layout
		column
		justify-center
		align-center
	>
		<v-container
			grid-list-md
			text-center
		>
			<v-flex
				xs8
				offset-xs2
			>
				<user-registration-card
					:details="details"
				>
					<hello-sign-btn />
				</user-registration-card>
			</v-flex>
		</v-container>
	</v-layout>
</template>

<script>

	import UserRegistrationCard from '~/components/Register/UserRegistrationCard.vue'
	import HelloSignBtn from '~/components/Register/HelloSignBtn.vue'
	
	export default{
		layout: 'authenticated',
		middleware: 'authenticated',
		components: {
			UserRegistrationCard,
			HelloSignBtn
		},
		data () {
			return {
				details: {
					icon: 'assignment_turned_in',
					title: 'Sign Docs',
					subtitle: 'Please read and sign the docs to satisfy the legal requirements to build your own femlight. Click the button below to get started.'
				}
			}
		}
	}
</script>