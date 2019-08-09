<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
    >
      <div class="text-xs-center">
        <nuxt-link
          to="/"
        >
          <img
            style="height:55px;position:relative; bottom:4px;"
            src="/images/femlight_logo.png"
            class=""
          >
        </nuxt-link>
      </div>
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
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-icon>shopping_cart</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="(item, index) in cartItems"
            :key="index"
          >
            <v-list-tile-title>
              <nuxt-link :to="item.href">
                {{ item.title }}
              </nuxt-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-if="cartEmpty">
            <v-list-tile-title>
              (0) cart empty
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

import { user } from '~/plugins/apis/user-api.js'

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      items: [
        {
          icon: 'dashboard',
          title: 'dashboard',
          to: '/dashboard'
        },
        {
          icon: 'face',
          title: 'Profile',
          to: '/profile'
        },
        {
          icon: 'store',
          title: 'My Products',
          to: '/manage-products'
        },
        {
          icon: 'perm_phone_msg',
          title: 'Support',
          to: '/support'
        }
      ],
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
		    cartItems: []
    }
  },
  computed: {
    cartEmpty () {
      return this.cartItems.length === 0
    },
    user () {
      return this.$store.state.user
    }
  },
  beforeCreate () {
    // set the access token
    user.setAxiosHeaders(this.$store.state.auth.accessToken)
    // get the user
    user.getUser()
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
      user.logout(this.$store.state.user.type)
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
</style>
