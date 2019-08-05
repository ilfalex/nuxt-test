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
				md8
				offset-md2
			>
				<user-registration-card
					:details="details"
				>
					<upload-id-front :details="details.card_inner" />
				</user-registration-card>
			</v-flex>
		</v-container>
	</v-layout>
</template>

<script>

import UserRegistrationCard from '~/components/Register/UserRegistrationCard.vue'
import UploadIdFront from '~/components/Register/UploadIdFront.vue'

export default {
	layout: 'authenticated',
	middleware: 'authenticated',
	components: {
		UserRegistrationCard,
		UploadIdFront
	},
	data () {
		return {
			details: {
				icon: 'contacts',
				title: 'Upload ID - Front',
				subtitle: 'Upload your identification card. If you are using a drivers license or state ID, please upload a picture of the front only. If you are using a passport, please upload the page with your picture on it.',
				img: '/images/id_front.png',
				card_inner: {
					prev: '/register/user-details',
					next: '/register/id-back',
					endpoint: '/register/id/front'
				}
			}
		}
	}
}

</script>
