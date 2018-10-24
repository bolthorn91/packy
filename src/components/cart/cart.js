import store from '../../store'


export default {
  name: 'cart',
  computed: {
    products() {
      return store.state.products;
    },
    users(){
      return store.state.users;
    }
  },

  data() {
    return {
    }
  },

  methods: {
    addProduct(obj) {
      return store.commit('addProduct', obj)
    },

    subtractProduct(obj) {
      return store.commit('subtractProduct', obj)
    },

  },

}