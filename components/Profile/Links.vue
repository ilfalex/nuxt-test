<template lang="html">
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="item in user.links"
        :key="item.id"
        md4
        sm6
        class="pa-3"
      >
        <v-card
          class="grey lighten-4 pa-4 text-xs-center"
          style="width:100%;"
        >
          <v-icon>{{ item.icon }}</v-icon>
          <h3 class="title font-weight-thin mb-3">
            {{ item.title }}
          </h3>
          <p>
            <a
              :href="item.url"
              target="_blank"
            >{{ item.url }}</a>
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
            @click="editLink(item)"
          >
            <v-icon class="mr-1">
              edit
            </v-icon>
            Edit
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <edit-text :selected-item="selectedItem" />
    </v-dialog>
  </div>
</template>

<script>
import EditText from '@/components/Profile/Dialog/Links/EditText'
export default {
  components: {
    EditText
  },
  props: {
    user: Object
  },
  data () {
    return {
      dialog: false,
      selectedItem: {}
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
