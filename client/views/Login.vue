<template>
<div class="container">
  <div class="row h-50 justify-content-center">
    <div class="col-4 align-self-center card">
      <div class="card-block">
        <img src="../assets/logo.svg" class="mx-auto d-block logo" alt="Logo"/>
        <login-form />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  components: {
    LoginForm
  }
}
</script>

<style scoped lang="scss">
.card {
  border: none;
  margin-top: 120px;
  min-width: 380px;
}
.container {
  height: 100vh;
}
.logo {
  width: 60%;
  margin-bottom: 2em;
}
</style>
