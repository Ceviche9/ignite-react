import { useContext } from "react"
import { TransactionContext } from "../../hooks/TransactionContext"

import { Container } from "./style"

export const Table = () => {
  const {transactions} = useContext(TransactionContext)

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
            transactions.map(transaction => {
              if(transaction) {
                const createdAt = new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
                const amount = new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL' 
                }).format(transaction.amount)

                return(
                <tr
                  key={transaction.id}
                >
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {amount}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {createdAt}
                  </td>
                </tr>
              )
              } else {
                return null
              }
            }
            )
          }
            
        </tbody>
      </table>
    </Container>
  )
}