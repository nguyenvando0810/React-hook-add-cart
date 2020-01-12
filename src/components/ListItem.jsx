import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { QUERY_AVAILABLE_ITEMS } from '../graphql'
import { Row } from 'antd'
import Item from './Item'

function ListItem() {
  const { data } = useQuery(QUERY_AVAILABLE_ITEMS)

  return (
    <Row gutter={10}>
      {data.itemsForSale &&
        data.itemsForSale.map((item, index) => {
          return <Item key={index} item={item} />
        })}
    </Row>
  )
}

export default ListItem
