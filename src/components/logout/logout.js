import store from '../../store'

export default {
  name: 'logout',
  computed: {
  },

  data() {
    return {

    }
  },

  methods: {
    logOut: () => store.commit('removeToken'),
    getUser: (_email, _password) => store.getters.getUser

  },

}