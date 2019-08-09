<template>
	<v-app light>
		<v-toolbar
			:clipped-left="clipped"
			fixed
			app
		>
			<v-spacer />
			<img
				style="height:55px;position:relative; bottom:4px;"
				src="http://alex.www.femlight.com/customize/storage/femlight-logo-02_grayPink.png"
				class=""
			>
			<h2
				class="font-weight-regular"
			>Custodian</h2>
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
					<v-list-tile>
						<v-list-tile-title>
							{{ user.email }}
						</v-list-tile-title>
					</v-list-tile>
					<v-divider />
					<v-list-tile>
						<v-list-tile-title>
							<nuxt-link to="/settings">
								Account Settings
							</nuxt-link>
						</v-list-tile-title>
					</v-list-tile>
					<v-list-tile>
						<v-list-tile-title
							@click="logout"
						>
							<span style="cursor:pointer;">Logout</span>
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

import { custodian } from '~/plugins/apis/custodian-api.js'

const Cookie = process.client ? require('js-cookie') : undefined

export default {
	data () {
		return {
			clipped: false,
			fixed: false,
			userMenu: [
					{
						title: 'logout',
						href: '/logout'
					},
					{
						title: 'settings',
						href: '/settings'
					}
			],
		}
	},
	computed: {
		user () {
			return this.$store.state.user
		}
	},
	beforeCreate () {
		// set the access token
		custodian.setAxiosHeaders(this.$store.state.auth.accessToken)
		// get the user
		custodian.getUser()
			.then(response => {
				this.$store.commit('setUser', response.data)
			})
	},
	methods: {
		logout () {
			// delete the cookies
			Cookie.remove('auth')

			const that = this.$router

			// make api call to logout
			custodian.logout(this.$store.state.user.type)
				.then(() => {
					// redirect to login page
					this.$store.commit('setAuth', null)
					this.$router.push('/login')
				})
		}
	}
}
</script>

<style>
.body {
	margin-bottom: 150px;
}
.logo-container{
	padding: 0;
}
</style>
