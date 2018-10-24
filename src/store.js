import Vue from 'vue'
import Vuex from 'vuex'
import _default from 'vuex';
import { usersModule } from './store/usersModule'
import { productsModule } from './store/productsModule'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    users: usersModule,
    products: productsModule
  }
})