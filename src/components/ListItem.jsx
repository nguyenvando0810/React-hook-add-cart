import React from 'react';

import { useQuery } from '@apollo/react-hooks'
import { QUERY_AVAILABLE_ITEMS } from '../graphql'
import { List } from 'antd';

function ListItem() {
  const { data } = useQuery(QUERY_AVAILABLE_ITEMS)

  return (
    <List
      size="default"
      bordered
      dataSource={data.itemsForSale}
      renderItem={item => <List.Item>{item.title}</List.Item>}
      style={{ width: 300 }}
    />
  );
}

export default ListItem;
