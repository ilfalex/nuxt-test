<template>
	<v-app light>
		<v-navigation-drawer
			v-model="drawer"
			:mini-variant="miniVariant"
			:clipped="clipped"
			fixed
		>
			<v-list>
				<v-list-tile
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
					@click="drawer = false"
				>
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title v-text="item.title" />
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar
			:clipped-left="clipped"
			fixed
			app
		>
			<v-toolbar-side-icon @click="drawer = !drawer" />
			<v-spacer />
			<img
				style="height:55px;position:relative; bottom:4px;"
				src="http://alex.www.femlight.com/customize/storage/femlight-logo-02_grayPink.png"
				class=""
			>
			<v-spacer />
			<v-menu offset-y>
				<template v-slot:activator="{ on }">
					<v-btn
						icon
						v-on="on"
					>
						<v-icon>account_circle</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-tile
						v-for="(item, index) in userMenu"
						:key="index"
					>
						<v-list-tile-title>
							<nuxt-link :to="item.href">{{ item.title }}</nuxt-link>
						</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-menu>
		</v-toolbar>
		<v-content>
			<nuxt />
		</v-content>
	</v-app>
</template>

<script>
export default {
	data () {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: 'apps',
					title: 'Welcome',
					to: '/'
				},
				{
					icon: 'apps',
					title: 'Edit Profile',
					to: '/profile'
				},
				{
					icon: 'bubble_chart',
					title: 'Registration',
					to: '/registration'
				}
			],
		    userMenu: [
		        {
		        	title: 'login',
		        	href: '/login' 
		        },
		        {
		        	title: 'register',
		        	href: '/register' 
		        }
		    ],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'Vuetify.js'
		}
	}
}
</script>

<style>
.body {
	margin-bottom: 150px;
}
</style>
