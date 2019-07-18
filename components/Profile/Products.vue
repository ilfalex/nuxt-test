<template lang="html">
  <div>
    <v-layout
      align-center
      justify-center
      row
      wrap
    >
      <v-flex
        v-for="item in user.products"
        :key="item.id"
        sm4
        class="pa-3 text-xs-center"
      >
        <div class="grey pa-3">
          <h4 class="display-2">
            {{ item.name }}
          </h4>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
}
</script>

<style lang="css" scoped>

</style>
