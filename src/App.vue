<template>
  <div id="app">
    <div id="nav">
    <ion-header>
      <ion-toolbar>
        <ion-title>Packy</ion-title>
      <router-link to="/" name="Home">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <div class="logo">
        <p>Aqui va el logito to wapo</p>
      </div>
      <div class="logginNav">
        <router-link to="/cart" v-if="loggedIn">cart</router-link> |
        <router-link to="/login" v-if="!loggedIn">Sign In</router-link> |
        <router-link to="/signup" v-if="!loggedIn">Sign Up</router-link> |
        <router-link to="/logout" v-if="loggedIn" @click.native="logOut()">Log Out</router-link>
      </div>
      </ion-toolbar>
    </ion-header>
      

    </div>


    <ion-app>
      <router-view/>
    </ion-app>

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

<style src="./assets/main.css"></style>

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
  color: #2c3e50;
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
  flex-direction: column;
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
