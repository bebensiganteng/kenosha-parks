<template>
<form>
  <h2 class="text-center login">{{ title }}</h2>
  <div class="form-group">
    <input type="email" class="form-control" placeholder="Email" required autoFocus />
  </div>
  <div class="form-group">
    <input type="password" class="form-control" placeholder="Password" required />                    
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">{{ loginButtonLabel }}</button>
</form>
</template>

<script>
export default {
  data() {
    return {
      title: 'Please Login',
      loginButtonLabel: 'Login'
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
