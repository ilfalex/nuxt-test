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
        src="/images/femlight_logo.png"
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
              <nuxt-link :to="item.href">
                {{ item.title }}
              </nuxt-link>
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
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      items: [
        {
          icon: 'info',
          title: 'How It Works',
          to: '/how-it-works'
        },
        {
          icon: 'contact_support',
          title: 'Contact Us',
          to: '/contact-us'
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
		    ]
    }
  }
}
</script>

<style>
.body {
	margin-bottom: 150px;
}
</style>
