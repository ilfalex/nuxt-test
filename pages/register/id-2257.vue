
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
				icon: 'face',
				title: 'Upload ID - With Face',
				subtitle: 'Upload a photo of your face next to your ID card. This ensures that you are the person you say you are.',
				img: '/images/id_2257.png',
				card_inner: {
					prev: '/id-back',
					next: '/sign-docs',
					endpoint: '/register/id/2257'
				}
			}
		}
	}
}

</script>
