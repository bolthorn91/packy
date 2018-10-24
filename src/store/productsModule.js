export const productsModule = {
state: {
    products: [
      { name: "Patatas", quantity: 0, price: 20, offer: true },
      { name: "Puerros", quantity: 0, price: 30, offer: false },
      { name: "Zanahorias", quantity: 0, price: 40, offer: true},
      { name: "Tomates", quantity: 0, price: 10, offer: false },
      { name: "Plátanos", quantity: 0, price: 20, offer: false },
      { name: "Naranjas", quantity: 0, price: 5, offer: true },
    ],
  },


  mutations: {
    addProduct: (state, obj) => {
      state.products.forEach(product => {
        if (product.name === obj.name) {
        return product.quantity += 1
        }
      })
    },


    subtractProduct: (state, obj) => {
      state.products.forEach(product => {
        if (product.name === obj.name && product.quantity > 0) {
        return product.quantity -= 1
        }
      })
    },

  },


  actions: {

  },


  getters: {
    getProducts: state => {
      return state.products
    },

    halfPricedProdcuts: state => {
      const halfPricedProdcuts = state.products.map(product => {
        return {
          name: product.name,
          quantity: product.quantity,
          price: product.price / 2
        }
      })
      return halfPricedProdcuts
    },


    getOfferProducts: state =>{
      return state.products.filter((product) => product.offer === true)
      }
    },



}