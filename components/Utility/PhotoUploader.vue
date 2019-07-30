<template lang="html">
  <div class="">
    <v-card
      class="pa-3"
    >
      <v-card-title primary-title>
        <h4 class="title">
          Add New Photos
        </h4>
      </v-card-title>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs6
          class="pa-3"
        >
          <v-btn block>
            Upload File
          </v-btn>
        </v-flex>
        <v-flex
          xs6
          class="pa-3"
        >
          <v-btn block>
            Import via Instagram
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
