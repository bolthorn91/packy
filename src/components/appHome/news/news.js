import store from '../../../store'


export default {
    name: 'newsComponent',
    computed: {
      offerProducts() {
        return store.getters.getOfferProducts
      },
    },

    
    data(){
      return {

      }
    },



    methods: {

    },


    created(){
      
    }
  }