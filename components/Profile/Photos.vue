<template lang="html">
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="item in user.images"
        :key="item.id"
        sm4
        class="pa-3"
      >
        <v-img
          v-if="item.url"
          :src="item.url"
        />
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
