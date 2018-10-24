import store from '../../store'
import newsComponent from './news/news'


export default {
    name: 'appHome',
    
    components: {
      newsComponent,
    },

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