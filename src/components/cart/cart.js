import store from '../../store'


export default {
  name: 'cart',
  computed: {
     /*products() {
      return store.state.products
    },
     getFarms(){
      return store.getters.getFarms
    },*/ 
    packsAdded() {
      return store.getters.getPacksAdded
    }
  },

  data() {
    return {
    }
  },

  methods: {
    addPackage(pack) {
      return store.commit('addPackage', pack)
    },

    subtractPackage(pack) {
      return store.commit('subtractPackage', pack)
    },

  },

}