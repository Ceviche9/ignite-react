# Chapter II - My Finances

![Captura de tela de 2021-10-18 10-48-19](https://user-images.githubusercontent.com/83431609/137744242-049be696-0a7e-48b8-94a3-f156836f5c15.png)


Neste módulo são abordadas as seguintes tecnologias e bibliotecas:

- [create-react-app](https://create-react-app.dev/)
- [Axios](https://axios-http.com/docs/intro)
- [styled-components](https://styled-components.com/)
- [MirageJs](https://miragejs.com/)
- [polished](https://polished.js.org/)

## Sobre o MirageJs

Mirage JS é uma biblioteca que permite simular, construir, testar e partilhar uma API para uma aplicação JavaScript/Typescript. No Mirage é possivel criar um servidor, um banco de dados, seeds para o banco de dados e até mesmo testes de UI. Neste módulo o mirage foi utilizado para simular uma api que armazena e retorna as transações do usuário.

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
Apos configurar o mirage as chamadas a api podem ser feitas normalmente utilizando o fetch, axios ou outra lib para APIs.

> src/services/api.ts:

``` Ts
import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
})

```
> src/hooks/useTransactions.tsx:

```Ts
const [transactions, setTransactions] = useState<TransactionProps[]>([])
  
  const handleTransactionsResponse = (data: ResponseProps) => {
    setTransactions(data.transactions)
  }
    
  useEffect(() => {
    api.get('/transactions')
      .then(response => handleTransactionsResponse(response.data as ResponseProps))
  },[])

  const createTransaction = async (transactionInput: TransactionInput) =>  {
    // Quando o mirage faz um POST, por padrão ele retorna os dados que foram inseridos.
    const response = await api.post('/transactions', transactionInput)

    const { transaction } = response.data as any

    setTransactions([
      ...transactions, transaction
    ])
  }
  

```
