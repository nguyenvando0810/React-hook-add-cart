import { QUERY_AVAILABLE_ITEMS, QUERY_CART_INFO } from './graphql'

export const resolvers = {
  Mutation: {
    addToCart: (_, args, { cache }) => {
      const { itemsForSale } = cache.readQuery({ query: QUERY_AVAILABLE_ITEMS })
      const { cart } = cache.readQuery({ query: QUERY_CART_INFO })

      const itemAdd = itemsForSale.filter((item) => item.id === args.id)

      let indexCart = -1

      for (let i = 0; i < cart.items.length; i++) {
        if(cart.items[i].item.id === args.id) {
          indexCart = i
        }
      }

      cache.writeQuery({
        query: QUERY_CART_INFO,
        data: {
          cart: {
            items: [...cart.items, {item: itemAdd[0], quantity: args.quantity}],
            total: cart.total + itemAdd[0].price,
            __typename: 'Cart'
          }
        }
      })

      console.log(cart);

      return itemAdd[0]
    },

    deleteToCart: (_, args, { cache }) => {
      const { cart } = cache.readQuery({ query: QUERY_CART_INFO })
      const itemDelete = cart.items.filter(item => item.id === args.id)

      // cache.writeQuery({
      //   query: QUERY_CART_INFO,
      //   data: {
      //     cart: {
      //       items: cart.items.filter(item=> item.id !== args.id),
      //       total: cart.total - itemDelete[0].price,
      //       __typename: 'Cart'
      //     }
      //   }
      // })

      return itemDelete[0]
    },
  }
}
