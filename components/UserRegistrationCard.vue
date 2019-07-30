<template>
  <v-card
    class="mx-auto"
  >
    <v-list two-line class="primary">
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>
            {{ details.icon }}
          </v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <h3>
              {{ details.title }}
            </h3>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-container grid-list-md text-center>
      <v-layout wrap align-center>
        <v-flex xs12 md6>
          <img :src="details.img" class="example-img">
        </v-flex>
        <v-flex xs12 md6 text-xs-left>
          {{ details.subtitle }}
        </v-flex>
      </v-layout>
    </v-container>

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
  .example-img{
    width: 100%;
  }
  .primary{
    color: #fff !important;
  }
  .primary .v-icon{
    color: #fff;
  }
</style>
