import React from 'react';
import './app.css';
import {ApolloProvider} from '@apollo/client';

import Routes from './routes';

import api from './service/api';

function App() {
  return (
    <ApolloProvider client={api}>
      <Routes />
    </ApolloProvider>        
  )
} export default App;