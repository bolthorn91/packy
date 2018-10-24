import store from '../../store'
import cart from '@/components/cart/cart.vue'


export default {
  name: 'productsComponent',
  components:{
    cart
  },
  computed: {
    products() {
      return store.getters.getProducts;
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