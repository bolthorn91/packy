import store from '../../store'
import router from '../../router'

export default {
  name: 'login',
  computed: {
  },

  data() {
    return {
      email:"",
      password:"",

    }
  },

  methods: {

    validateUser(email, password){
      store.dispatch('validateUser', { email, password })
      .then(() =>{
        const user = store.getters.getUsersLoggedIn
        if (localStorage.getItem('access_token').value === store.state.token && user.type === 'consumer') {
          return (console.log('user succesfull logged in'), router.push({ name: 'home' }))
        }
        else if (localStorage.getItem('access_token').value === store.state.token && user.type === 'farmer') {
          return (console.log('farmer succesfull logged in'), router.push({ name: 'home' }))
        }
      })
    .catch(()=> console.log('you could not login'))
    },      

  getUser: (_email, _password) => store.getters.getUser
    

  },

}