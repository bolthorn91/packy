import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import products from './views/products.vue'
import login from './views/login.vue'
import cart from './views/cart.vue'
import logout from './components/logout/logout.vue'
import news from './components/appHome/news/news.vue'


Vue.use(Router)

export default new Router({
  name: 'router',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    //{
      //path: '/about',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//},
    {
    path: '/products',
    name: 'products',
    component: products
  },
    {
    path: '/login',
    name: 'login',
    component: login
  },
    {
    path: '/cart',
    name: 'cart',
    component: cart
  },
    {
    path: '/logout',
    name: 'logout',
    component: logout
  },
  ]
})
