<template lang="html">
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="item in user.links"
        :key="item.id"
        sm6
        class="pa-3"
      >
        <div class="grey lighten-4 pa-4 text-xs-center">
          <v-icon>{{ item.icon }}</v-icon>
          <h3 class="title font-weight-thin mb-3">
            {{ item.title }}
          </h3>
          <p>
            <a :href="item.url" target="_blank">{{ item.url }}</a>
          </p>
          <v-btn
            small
            class="red--text"
            @click="removeLink(item)"
          >
            <v-icon class="mr-1">
              close
            </v-icon>
            Remove
          </v-btn>
          <v-btn
            small
            @click="editLink(item)">
            <v-icon class="mr-1">
              edit
            </v-icon>
            Edit
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <edit-text :selectedItem="selectedItem"/>
    </v-dialog>
  </div>
</template>

<script>
import EditText from '@/components/Profile/Dialog/Links/EditText'
export default {
  props: {
    user: Object
  },
  components: {
    EditText
  },
  data () {
    return {
      dialog: false,
      selectedItem: true
    }
  },
  methods: {
    removeLink (item) {
      this.user.links.splice(this.user.links.indexOf(item), 1)
    },
    editLink (item) {
      this.selectedItem = item
      this.dialog = true
    }
  }
}
</script>

<style lang="css" scoped>

</style>
