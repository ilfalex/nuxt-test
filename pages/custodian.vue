<template>
  <v-layout>
    <sidebar />
    <v-container
      fluid
      grid-list-xl
    >
      <v-layout wrap>
        <v-flex xs6>
          <!-- user data -->
          <approval-card />
        </v-flex>
        <v-flex xs6>
          <!-- id front -->
          <approval-card />
        </v-flex>
        <v-flex xs6>
          <!-- id back -->
          <approval-card />
        </v-flex>
        <v-flex xs6>
          <!-- 2257 img -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>

import Sidebar from '~/components/Custodian/Sidebar.vue'
import ApprovalCard from '~/components/Custodian/ApprovalCard.vue'

export default {
  middleware: 'authenticated',
  layout: 'custodian',
  components: {
    Sidebar,
    ApprovalCard
  }
}

</script>
