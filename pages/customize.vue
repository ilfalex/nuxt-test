<template>
	<div>
		<!-- <registration /> -->
		<swiper-container />
	</div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import Registration from '~/components/Registration.vue'
import SwiperContainer from '~/components/Wizard/SwiperContainer.vue'

export default {
	layout: 'authenticated',
	middleware: 'authenticated',
	components: {
		// Registration,
		SwiperContainer
	}
}
</script>
