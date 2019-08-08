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
        md8
        offset-md2
      >
        <user-registration-card
          :details="details"
        >
          <personal-details-form />
        </user-registration-card>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>

import UserRegistrationCard from '~/components/Register/UserRegistrationCard.vue'
import PersonalDetailsForm from '~/components/Register/PersonalDetailsForm.vue'

export default {
  layout: 'authenticated',
  middleware: 'authenticated',
  components: {
    UserRegistrationCard,
    PersonalDetailsForm
  },
  data () {
    return {
      details: {
        icon: 'list_alt',
        title: 'Personal Details',
        subTitle: 'Femlight uses a secure server, protecting your information is our highest priority'
      }
    }
  }
}

</script>
