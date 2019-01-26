export const productsModule = {
state: {
    farms:[
    { 
      name: "Raimundo",
      location: "Arucas",
      description: "Gran variedad de papas",
      date:"",
      top: false,
      packs: [
        {
          name: 'small',
          number: 0,
          price: 5,
          },
  
          {
          name: 'medium',
          number: 0,
          price: 8,
          },
  
          {
          name: 'large',
          number: 0,
          price: 12,
          }
      ],  
      products: [
        { name: "Patatas", weight: 5, price: 20, offer: true },
        { name: "Puerros", weight: 5, price: 30, offer: false },
        { name: "Zanahorias", weight: 5, price: 40, offer: true},
        { name: "Tomates", weight: 5, price: 10, offer: false },
        { name: "Plátanos", weight: 5, price: 20, offer: false },
        { name: "Naranjas", weight: 5, price: 5, offer: true },
        ],
    },

    
    { 
      name: "Bentayga",
      location: "Tejeda",
      description: "Gran variedad de montañas",
      date:"",
      top:true,
      packs:[
        {
        name: 'small',
        number: 0,
        price: 5,
        },

        {
        name: 'medium',
        number: 0,
        price: 8,
        },

        {
        name: 'large',
        number: 0,
        price: 12,
        }
      ],
      
      products: [
        { name: "Patatas", weight: 5, price: 20, offer: true },
        { name: "Puerros", weight: 5, price: 30, offer: false },
        { name: "Zanahorias", weight: 5, price: 40, offer: true},
        { name: "Tomates", weight: 5, price: 10, offer: false },
        { name: "Plátanos", weight: 5, price: 20, offer: false },
        { name: "Naranjas", weight: 5, price: 5, offer: true },
        ],
    },

  ],

},


  mutations: {
    addPackage: (state, obj) => {
      state.farms.forEach(farm => farm.packs.forEach(pack => {
        if (pack.name === obj.pack.name && farm.name === obj.farm.name) {
        return pack.number += 1
        }
      }))
    },


    subtractPackage: (state, obj) => {
      state.farms.forEach(farm => farm.packs.forEach(pack => {
          if (pack.name === obj.pack.name && farm.name === obj.farm.name && pack.number > 0) {
          return pack.number -= 1
          }
        }))
      },

  },


  actions: {

  },


  getters: {
    getFarms: state => state.farms,
    

    halfPricedProdcuts: state => {
      const halfPricedProdcuts = state.farms.map(farm => {
        return {
          name: farm.name,
          //weight: farm.weight,
         // price: farm.price / 2
        }
      })
      return halfPricedProdcuts
    },

    getPacksAdded: state => state.farms.map(farm => {
    return farm.packs.forEach(pack => {
      if (pack.number > 0) {
        return pack
      }
    }) 
      
      }),
 
    }  
  }



