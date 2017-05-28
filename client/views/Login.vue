<template>
<v-container>
  <v-layout row>
    <v-flex xs12 md4 offset-md4>
      <v-card>
        <v-card-text class="teal text-xs-center">
          <v-icon light large class="account-circle">account_circle</v-icon>
          <h4 class="white--text">Please Login</h4>
        </v-card-text>
        <v-card-text>
            <v-text-field v-model="email" name="email" label="Email" type="email" autofocus />
            <v-text-field v-model="password" label="Password" type="password" name="password" />
        </v-card-text>
        <v-card-row actions>
          <v-btn block large primary light @click.native.stop="login">Login</v-btn>
        </v-card-row>
      </v-card>
    </v-flex>
  </v-layout>        
</v-container>
</template>

<script>
import * as types from '../store/mutationTypes'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'login'
    ])
  },
  computed: {
    email: {
      get () {
        return this.$store.state.user.email
      },
      set (value) {
        this.$store.commit(types.EMAIL_INPUT_CHANGE, value)
      }
    },
    password: {
      get () {
        return this.$store.state.user.password
      },
      set (value) {
        this.$store.commit(types.PASSWORD_INPUT_CHANGE, value)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  padding-top: 10%;
}
.card__row--actions {
  justify-content: center;
}
.icon--large {
  font-size: 6em;
}
h4 {
  font-size: 1.5em;
}
</style>
