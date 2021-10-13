import React from 'react';
import ReactDOM from 'react-dom';
import {createServer} from 'miragejs'
import {App} from './App';

createServer({
  routes() {
    // Todas as chamadas que tiverem /api serão direcionadas para o mirageJs.
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()
        }
      ]
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
