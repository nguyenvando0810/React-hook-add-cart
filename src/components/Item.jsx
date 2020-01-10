import React from 'react';
import { Card } from 'antd';

function Item() {
  return (
    <Card title="Card title" style={{ width: 300 }} bordered={true}>
      Card content
    </Card>
  );
}

export default Item;
