import React from 'react'
import { Icon } from 'antd';
import { useQuery, useMutation } from '@apollo/react-hooks'
import { QUERY_CART_INFO, MUTATION_DELETE_TO_CART } from '../graphql'

function Cart() {
  const { data } = useQuery(QUERY_CART_INFO)
  const [deleteToCart] = useMutation(MUTATION_DELETE_TO_CART)

  const handleDeleteCart = (id) => {
    deleteToCart({ variables: { id } })
  }

  return (
    <div className="cart">
      <h2>My Cart</h2>
      {data.cart.items.map((item, index) => <p key={index}>{item.item.title}  <span>{item.quantity}</span><Icon type="close-circle" onClick={() => handleDeleteCart(item.item.id)} /></p>)}
      <p>Total : <strong>$ {data.cart.total.toFixed(2)}</strong></p>
    </div>
  )
}

export default Cart
