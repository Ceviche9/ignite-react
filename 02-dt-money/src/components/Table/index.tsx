import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { ResponseProps, TransactionProps } from "./types"

import { Container } from "./style"

export const Table = () => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  const handleTransactionsResponse = (data: ResponseProps) => {
    setTransactions(data.transactions)
  }
    
  useEffect(() => {
    api.get('/transactions')
      .then(response => handleTransactionsResponse(response.data as ResponseProps))
  },[])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => (
              <tr
                key={transaction.id}
              >
                <td>{transaction.title}</td>
                <td className={transaction.type} >{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))
          }
            
        </tbody>
      </table>
    </Container>
  )
}