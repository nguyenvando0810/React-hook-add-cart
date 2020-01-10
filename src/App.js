import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/react-hooks'
import { QUERY_AVAILABLE_ITEMS } from './graphql'
import ListItem from './components/ListItem';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Monthly Average Temperature'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
  series: [{
    name: 'Tokyo',
    data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  }, {
    name: 'London',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }]
}

function App() {
  const { data } = useQuery(QUERY_AVAILABLE_ITEMS)
  console.log("TCL: App -> data", data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="content">
        <ListItem />

        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    </div>
  );
}

export default App;
