import React from 'react'
import logo from './logo.svg'
import './App.css'
import ListItem from './components/ListItem'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Row, Col } from 'antd'
import Cart from './components/Cart'

const options = {
  chart: {
    type: 'line'
  },
  credits: {
    enabled: false
  },
  title: {
    text: 'Đô Đô'
  },
  subtitle: {
    text: 'Vẫn là Đô Đô nhưng là subtitle.'
  },
  tooltip: {
    shared: true,
    backgroundColor: '#FCFFC5',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 3
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
  },
  yAxis: {
    title: {
      text: 'Temperature (°C)'
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [
    {
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    },
    {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    },
    {
      name: 'Viet',
      data: [3.3, 4.7, 5.7, 8.7, 11, 6, 17.0, 16.8, 14.6, 10.5, 6.3, 8.8]
    }
  ]
}

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="content">
        <Row>
          <Col span={20}>
            <ListItem />
          </Col>
          <Col span={4}>
            <Cart />
          </Col>
        </Row>

        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}

export default App
