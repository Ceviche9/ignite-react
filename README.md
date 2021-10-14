<p align="center">
   <img src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/a11afefe824866f24dd3f9e1cc6e6e9530376ad1/%40assets/img/logo.svg" alt="Ignite" width="180"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/tund%C3%AA-cavalcante-1621441ba/">
      <img alt="Tundê Cavalcante" src="https://img.shields.io/badge/-Tundê Cavalcante-01B755?style=flat&logo=Linkedin&logoColor=white" />
   </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-01B755">
</p>

> Repositório onde se encontra todos os projetos desenvolvidos na trilha de ReactJS do Ignite da [Rocketseat](https://github.com/Rocketseat).

# Chapter I - Github Explorer

Neste módulo é abordado a criação e configuração (através do Webpack + Babel) do projeto. Também foi reforçado o conhecimento sobre os conceitos do React (Propriedades, imutabilidade, etc).
Esse projeto é um pequeno listador de repositórios do github.

# Chapter II - DT Money

Neste módulo são abordadas as seguintes tecnologias e bibliotecas:

- [create-react-app](https://create-react-app.dev/)
- [Axios](https://axios-http.com/docs/intro)
- [styled-components](https://styled-components.com/)
- [MirageJs](https://miragejs.com/)
- [polished](https://polished.js.org/)

## MirageJs

Mirage JS é uma biblioteca que permite simular, construir, testar e partilhar uma API para uma aplicação JavaScript/Typescript. No Mirage é possivel criar uma servidor, um banco de dados, seeds para o banco de dados e até mesmo testes de UI. Neste módulo o mirage foi utilizado para simular uma api que armazena e retorna as transações do usuário.

### Configuração:

``` Ts

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

```
