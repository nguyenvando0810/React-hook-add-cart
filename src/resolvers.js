import { QUERY_AVAILABLE_ITEMS, QUERY_CART_INFO } from './graphql'

export const resolvers = {
  Mutation: {
    addToCart: (_, args, { cache }) => {
      const { itemsForSale } = cache.readQuery({ query: QUERY_AVAILABLE_ITEMS })
      const { cart } = cache.readQuery({ query: QUERY_CART_INFO })

      const itemAdd = itemsForSale.filter((item) => item.id === args.id)

      let indexCart = -1
      let total = 0
      let dataClone = [...cart.items]

      for (let i = 0; i < cart.items.length; i++) {
        if (cart.items[i].item.id === args.id) {
          indexCart = i
        }
      }

      if ( indexCart !== -1) {
        dataClone[indexCart].quantity += args.quantity
      } else {
        dataClone= [...dataClone, {
          item: itemAdd[0],
          quantity: args.quantity
        }]
      }

      for (let i = 0; i < dataClone.length; i++) {
        total += dataClone[i].item.price * dataClone[i].quantity
      }

      cache.writeQuery({
        query: QUERY_CART_INFO,
        data: {
          cart: {
            items: dataClone,
            total: total,
            __typename: 'Cart'
          }
        }
      })
    },

    deleteToCart: (_, args, { cache }) => {
      const { cart } = cache.readQuery({ query: QUERY_CART_INFO })
      let itemDelete = cart.items.filter(item=> item.item.id === args.id)

      cache.writeQuery({
        query: QUERY_CART_INFO,
        data: {
          cart: {
            items: cart.items.filter(item=> item.item.id !== args.id),
            total: cart.total - itemDelete[0].item.price* itemDelete[0].quantity,
            __typename: 'Cart'
          }
        }
      })
    },

    updateQuantityToCart: (_, args, { cache }) => {
      const { cart } = cache.readQuery({ query: QUERY_CART_INFO })
      let total = 0
      let itemUpdate = cart.items.filter(item=> item.item.id === args.id)
      let newItemUpdate = itemUpdate[0]
      newItemUpdate.quantity = args.quantity

      let indexItemUpdate = cart.items.findIndex(item=> item.item.id === args.id)

      let dataClone = [...cart.items]
      dataClone = [...dataClone.slice(0, indexItemUpdate), newItemUpdate, ...dataClone.slice(indexItemUpdate, dataClone.slength + 1)]

      for (let i = 0; i < dataClone.length; i++) {
        total += dataClone[i].item.price * dataClone[i].quantity
      }

      cache.writeQuery({
        query: QUERY_CART_INFO,
        data: {
          cart: {
            items: dataClone,
            total: total,
            __typename: 'Cart'
          }
        }
      })
    }
  }
}
