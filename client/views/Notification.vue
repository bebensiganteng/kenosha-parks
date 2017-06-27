<template>
<v-layout row justify-center>
  <v-flex xs12 md6>
    <v-alert info dismissible v-model="response">
      {{ response }}
    </v-alert>
    <v-alert error dismissible v-model="error">
      {{ error }}
    </v-alert>
    <form @submit.prevent="sendNotification">
      <v-card>
        <v-card-title>Create Notification</v-card-title>
        <v-card-row>
          <v-container fluid>
            <v-flex xs12>
              <v-text-field v-model="title" label="Title" single-line></v-text-field>
              <v-text-field v-model="message" label="Message" single-line></v-text-field>
            </v-flex>
          </v-container>
        </v-card-row>
        <v-divider></v-divider>
        <v-card-row actions>
          <v-btn type="submit" primary light>
            Send Notification
          </v-btn>
        </v-card-row>
      </v-card>
    </form>
  </v-flex>
</v-layout>
</template>

<script>
import * as types from '../store/mutationTypes'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'sendNotification'
    ])
  },
  computed: {
    title: {
      get () {
        this.$store.state.notification.title
      },
      set (value) {
        this.$store.commit(types.TITLE_INPUT_CHANGE, value)
      }
    },
    message: {
      get () {
        this.$store.state.notification.message
      },
      set (value) {
        this.$store.commit(types.MESSAGE_INPUT_CHANGE, value)
      }
    },
    response: {
      get () {
        this.$store.state.notification.response
      }
    },
    error: {
      get () {
        this.$store.state.notification.error
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.input-group--full-width {
  padding: 0;
}
</style>

