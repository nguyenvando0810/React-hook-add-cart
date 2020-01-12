import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { QUERY_CART_INFO } from '../graphql'

function Cart() {
  const { data } = useQuery(QUERY_CART_INFO)

  return (
    <div className="cart">
      <h2>My Cart</h2>
      { data.cart.items.map((item, index) => <p key={index}>{item.title}</p>) }
      <p>Total : <strong>$ {data.cart.total.toFixed(2)}</strong></p>
    </div>
  )
}

export default Cart
