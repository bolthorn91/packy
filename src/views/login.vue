<template>
  <div class="contact">
    <login-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import loginComponent from '@/components/login/login.vue'

export default {
  name: 'login',
  components: {
    loginComponent,
  }
}
</script>