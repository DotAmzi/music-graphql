import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { setContext } from 'apollo-link-context';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const httpLink = new HttpLink({ uri: 'http://127.0.0.1:3005/graphql' });

const authLink = setContext(async (req, { headers }) => {
    return {
      ...headers
    };
  });
  

const link = authLink.concat(httpLink);
const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all'
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all'
      }
    }
  });

const Context = () => (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  

ReactDOM.render(<Context />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
