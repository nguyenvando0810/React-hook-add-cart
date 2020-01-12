import { gql } from 'apollo-boost'

export const QUERY_AVAILABLE_ITEMS = gql`
  query {
    itemsForSale @client {
      id
      title
      thumbnail_url
      price
    }
  }
`

export const QUERY_CART_INFO = gql`
  query {
    cart @client {
      items {
        id
        title
        thumbnail_url
        price
      }
      total
    }
  }
`
export const MUTATION_ADD_TO_CART = gql`
  mutation ($id: String!) {
    addToCart(id: $id)  @client
  }
`