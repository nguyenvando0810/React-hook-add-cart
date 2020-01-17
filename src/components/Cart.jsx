import React from 'react'
import { Icon } from 'antd';
import { useQuery, useMutation } from '@apollo/react-hooks'
import { QUERY_CART_INFO, MUTATION_DELETE_TO_CART, MUTATION_UPDATE_QUANTITY_TO_CART } from '../graphql'

function Cart() {
  const { data } = useQuery(QUERY_CART_INFO)
  const [deleteToCart] = useMutation(MUTATION_DELETE_TO_CART)
  const [updateQuantityToCart] = useMutation(MUTATION_UPDATE_QUANTITY_TO_CART)

  const handleDeleteCart = (id) => {
    deleteToCart({ variables: { id } })
  }

  const handleUpdateQuantity = (id, quantity) => {
    updateQuantityToCart({ variables: { id, quantity } })
  }

  return (
    <div className="cart">
      <h2 contenteditable>My Cart</h2>

      {data.cart.items.map((item, index) =>
        <p key={index}>
          <span className="title">{item.item.title}</span>
          <span>
            <Icon type="minus-circle" onClick={() => handleUpdateQuantity(item.item.id, item.quantity - 1)} />
            &nbsp;&nbsp;<strong>{item.quantity}</strong>&nbsp;&nbsp;
            <Icon type="plus-circle" onClick={() => handleUpdateQuantity(item.item.id, item.quantity + 1)} />
          </span>
          <Icon type="close-circle" onClick={() => handleDeleteCart(item.item.id)} />
        </p>
      )}
      <p>Total: <strong>${data.cart.total.toFixed(2)}</strong></p>
    </div>
  )
}

export default Cart
