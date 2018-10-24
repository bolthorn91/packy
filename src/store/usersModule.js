import router from '../router'

export const usersModule = {

  state: {

    //Fake. Should be HTTP request to DB
    users: [
      { name: "pepe@gmail.com", password: 'pepitogrillo', type: 'consumer', token: null },
      { name: "lolito@gmail.com", password: 'pepitogrillo', type: 'vendor', token: null },
      { name: "manolo@gmail.com", password: 'pepitogrillo', type: 'consumer', token: null },
    ],

    //fake token from backend
    token: 'kfaAFAepfpqo21¡41kfpoaafkf>',
  },


  mutations: {

    validateUser(state, { email, password }) {
      state.users.filter(user => {
        if (user.name === email && user.password === password) {
          return (user.token = state.token, localStorage.setItem('access_token', state.token), console.log('correct user and password', router.push({name: 'home'})))
        }
      })
      return
    },


    removeToken: (state) => state.users.filter(user => {
      if (user.token != null) {
        return (localStorage.removeItem('access_token'), user.token = null, console.log('usuario logout'), router.push({name: 'home'}))
      }
      return console.log('Fail');
    }),
  
  },




  actions: {
    validateUser({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        commit('validateUser', { email, password })
        resolve(res => console.log('user authenticated:', res))
        reject(e => console.log('something wrong happend:', e))
      })
    },

  },


  getters: {
    getUser: (state) => (email, password) => (state.filter(user => user.name === email && user.password === password)),
    getUsers: (state) => (state.users, console.log(state.users)),
    getUsersTokenAndName: (state) => state.users.forEach(user => { console.log(user.name, user.token)}),
    getUsersLoggedIn: (state) => state.users.find(user => (user.token === state.token && localStorage.getItem('access_token') && user.token != null)) , 
  }
}

