import incomeImg from '../../Assets/income.svg'
import outcomeImg from '../../Assets/outcome.svg'
import totalImg from '../../Assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

import { Container } from "./style"

export const Summary = () => {
  const {transactions} = useTransactions()
  
  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraw += transaction.amount
      acc.total -= transaction.amount
    }
    return acc
  }, 
  {
    deposits: 0,
    withdraw: 0,
    total: 0
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL' 
            }).format(summary.deposits)
          }
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- 
        {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL' 
            }).format(summary.withdraw)
          }
        </strong>
      </div>
      <div className="hightLight-background" >
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
        {
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL' 
          }).format(summary.total)
        }
        </strong>
      </div>
    </Container>
  )
}