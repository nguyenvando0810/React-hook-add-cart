import React from 'react'
import { Card, Col, Button } from 'antd'
import { useMutation } from '@apollo/react-hooks'
import { MUTATION_ADD_TO_CART } from '../graphql'

function Item({ item }) {
  const [addToCart] = useMutation(MUTATION_ADD_TO_CART, {
    variables: { id: item.id }
  })

  return (
    <Col span={5}>
      <Card
        bordered={true}
        cover={<img alt="example" src={item.thumbnail_url} />}
      >
        <strong>{item.title}</strong>
        <p>$ {item.price}</p>
        <Button type="primary" onClick={() => addToCart(item)}>
          Add to card
        </Button>
      </Card>
    </Col>
  )
}

export default Item
