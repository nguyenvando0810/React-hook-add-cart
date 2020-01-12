import { QUERY_AVAILABLE_ITEMS, QUERY_CART_INFO } from './graphql'

export const resolvers = {
  Mutation: {
    addToCart: (_, args, { cache }) => {
      const { itemsForSale } = cache.readQuery({ query: QUERY_AVAILABLE_ITEMS })
      const { cart } = cache.readQuery({ query: QUERY_CART_INFO })

      const itemAdd = itemsForSale.filter((item) => item.id === args.id)

      cache.writeQuery({
        query: QUERY_CART_INFO,
        data: {
          cart: {
            items: cart.items.concat(itemAdd[0]),
            total: cart.total + itemAdd[0].price,
            __typename: 'Cart'
          }
        }
      })

      return itemAdd[0]
    }
  }
}
