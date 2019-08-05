
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
          <upload-id-front :details="details.card_inner" />
        </user-registration-card>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>

import UserRegistrationCard from '~/components/Register/UserRegistrationCard.vue'
import UploadIdFront from '~/components/Register/UploadIdFront.vue'

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
        icon: 'credit_card',
        title: 'Upload ID - Back',
        subtitle: 'Upload the back of your identification card. If you are using a drivers license or state ID, please upload a picture of the back only. If you are using a passport, just upload a picture of the cover.',
        img: '/images/id_back.png',
        card_inner: {
          prev: '/id-front',
          next: '/id-2257',
          endpoint: '/register/id/back'
        }
      }
    }
  }
}

</script>
