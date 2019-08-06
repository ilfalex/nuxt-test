<template>
	<v-container>
		<v-layout>
			<verification-status-dialog />
		</v-layout>
	</v-container>
</template>

<script>

import { dashboard } from '~/plugins/apis/dashboard-api.js'
import VerificationStatusDialog from '~/components/Dashboard/VerificationStatusDialog.vue'

export default {
	layout: 'authenticated',
	middleware: 'authenticated',
	components: {
		VerificationStatusDialog
	}
}
</script>
