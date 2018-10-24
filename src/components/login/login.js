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

    async validateUser(email, password){
      store.dispatch('validateUser', { email, password })
      .then(function () { 
        if (localStorage.getItem('acces_token').value === store.state.token) {
          console.log('user succesfull logged in')
          return router.push({ name: 'home' })
        }
      })
      .catch(()=> console.log('you could not login'))
    },      

  getUser: (_email, _password) => store.getters.getUser
    

  },

}