<template>
  <v-card
    class="mx-auto"
  >
    <v-list two-line>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>
            {{ details.icon }}
          </v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ details.title }}
          </v-list-tile-title>
          <v-list-tile-sub-title class="overflowable">
            {{ details.subTitle }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <slot />
  </v-card>
</template>

<script>
export default {
  props: {
    details: {}
  },
  data () {
    return {

    }
  }
}
</script>

<style>
	.flex{
		text-align: center;
	}
	.overflowable{
		white-space: normal;
	}
</style>
