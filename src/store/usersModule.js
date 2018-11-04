import router from '../router'

export const usersModule = {

  state: {

    //Fake. Should be HTTP request to DB
    users: [
      { name: "p", password: 'p', type: 'consumer', token: null },
      { name: "a", password: 'a', type: 'farmer', token: null },
    ],

    //fake token from backend
    token: 'kfaAFAepfpqo21¡41kfpoaafkf>',
  },


  mutations: {

    validateUser(state, { email, password }) {
      state.users.filter(user => {
        if (user.name === email && user.password === password && user.type === 'consumer') {
          return (user.token = state.token, localStorage.setItem('access_token', state.token), console.log('correct user and password, redirecting to user page'))
        }
        else if(user.name === email && user.password === password && user.type === 'farmer') 
        {
          return (user.token = state.token, localStorage.setItem('access_token', state.token), console.log('correct user and password, redirecting to farmer page'))
        }
        else {
          return
        }
    })
    },

    removeToken: (state) => state.users.filter(user => {
      if (user.token != null) {
        return (localStorage.removeItem('access_token'), user.token = null, console.log('usuario logout'), router.push({name: 'home'}))
      }
      return
    })
    
  },




  actions: {
    validateUser({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        commit('validateUser', { email, password })
        resolve()
        //reject(console.log('something wrong happend:'))
      })
    },

  },


  getters: {
    getUser: (state) => (email, password) => (state.filter(user => user.name === email && user.password === password)),
    getUsers: (state) => (state.users, console.log(state.users)),
    //getUsersTokenAndName: (state) => state.users.forEach(user => { console.log(user.name, user.token)}),
    getUsersLoggedIn: (state) => state.users.find(user => (user.token === state.token && localStorage.getItem('access_token') && user.token != null)) , 
  }
}

