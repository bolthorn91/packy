import store from '../../store'


export default {
  name: 'productsComponent',

  computed: {
    farms() {
      return store.getters.getFarms
    },

  },

  data() {
    return {
    }
  },

  methods: {
    addPackage (pack, farm) {
      return store.commit('addPackage',{pack, farm})
    },

    subtractPackage (pack, farm) {
      return store.commit('subtractPackage', {pack, farm})
    },

  },

}