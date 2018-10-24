import store from '../../store'

export default {
  name: 'signIn',
  computed: {
    products() {
      return store.state.products;
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