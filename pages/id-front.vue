<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container
      grid-list-md
      text-center
    >
      <v-flex
        xs8
        offset-xs2
      >
        <user-registration-card
          :details="details"
        >
          <upload-id-front />
        </user-registration-card>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>

import UserRegistrationCard from '~/components/UserRegistrationCard.vue'
import UploadIdFront from '~/components/UploadIdFront.vue'

export default {
  layout: 'authenticated',
  middleware: 'authenticated',
  components: {
    UserRegistrationCard,
    UploadIdFront
  },
  data () {
    return {
      details: {
        icon: 'contacts',
        title: 'Upload ID - Front',
        subTitle: 'Upload your identification card. If you are using a drivers license or state ID, please upload a picture of the front only. If you are using a passport, please upload the page with your picture on it.'
      }
    }
  }
}

</script>
