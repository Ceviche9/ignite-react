import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'
import {App} from './App';

createServer({

  // O mirageJs permite que vc crie um tabelas para simular um banco de dados.
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      // O nome da tabela sempre vai ser o nome do model no plural.
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-10-05 09:00:00')
        },
        {
          id: 2,
          title: 'Venda de Código fonte',
          type: 'deposit',
          category: 'Dev',
          amount: 120000,
          createdAt: new Date('2021-10-06 13:00:00')
        },
        {
          id: 3,
          title: 'Macbook Air',
          type: 'withdraw',
          category: 'Compras',
          amount: 9000,
          createdAt: new Date('2021-10-13 09:00:00')
        }
      ]
    })
  },

  routes() {
    // Todas as chamadas que tiverem /api serão direcionadas para o mirageJs.
    this.namespace = 'api';

    this.get('/transactions', () => {

      // Para retornar as transactions salvas no banco do mirage
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      console.log("dentro do post", data)

      // Schema -> banco de dados do mirage

      // Transaction -> Model que criei pelo mirage
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
