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
      items
      total
    }
  }
`
export const MUTATION_ADD_TO_CART = gql`
  mutation ($id: String!, $quantity: Number!) {
    addToCart(id: $id, quantity: $quantity) @client
  }
`
export const MUTATION_DELETE_TO_CART = gql`
  mutation ($id: String!) {
    deleteToCart(id: $id) @client
  }
`