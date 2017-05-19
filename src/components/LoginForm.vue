<template>
<form @submit.prevent="login">
  <h2 class="text-center login">{{ title }}</h2>
  <div class="form-group">
    <input v-model.lazy="email" type="email" class="form-control" placeholder="Email" required autoFocus />
  </div>
  <div class="form-group">
    <input v-model.lazy="password" type="password" class="form-control" placeholder="Password" required />                    
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">{{ loginButtonLabel }}</button>
</form>
</template>

<script>
import * as types from '../store/mutationTypes'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      title: 'Please Login',
      loginButtonLabel: 'Login'
    }
  },
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

<style scoped lang="scss">
.login {
  font-weight: 100;
  margin-bottom: 30px;
}
button {
  cursor: pointer;
}
</style>
