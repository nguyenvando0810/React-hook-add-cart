import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { available_items } from './data';
import { resolvers } from './resolvers';
let dataStorate = JSON.parse(localStorage.getItem("CART"));
console.log("TCL: dataStorate", dataStorate)

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache: cache,
  clientState: {
    defaults: {
      cart: {
        items: [],
        total: 0,
        __typename: 'Cart'
      },
      itemsForSale: available_items
    },
    resolvers
  },
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
