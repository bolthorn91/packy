<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link>
      <router-link to="/cart"></router-link>
      <div class="logo">
        <p>Aqui va el logito to wapo</p>
      </div>
      <div class="logginNav">
        <router-link to="/login" v-if="!loggedIn">Sign In</router-link>
        <router-link to="/login" v-if="!loggedIn">Sign Up</router-link>
        <router-link to="/logout" v-if="loggedIn" @click.native="logOut()">Log Out</router-link>
      </div>
      

    </div>

    <router-view/>

  </div>
</template>

<script>
import store from './store'

export default {
  computed:{
    loggedIn(){
      return store.getters.getUsersLoggedIn
    }
  },

  methods:{
    logOut: ()=>{
      return store.commit('removeToken')
    }
  },
  created() {
    store.getters.getUsersLoggedIn
  }

}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  cursor: pointer;
  user-select: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  cursor: default;
}

#nav {
  display: flex;
  align-items: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logginNav{
  justify-self: flex-end;
}
</style>
