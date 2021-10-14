import {createContext, useEffect, useState} from 'react'
import { ResponseProps, 
        TransactionInput,
        TransactionProps, 
        TransactionsContextDataProps, 
        TransactionsProviderProps } 
from '../protocols/componentsProtocols';
import { api } from '../services/api';

export const TransactionContext = createContext<TransactionsContextDataProps>(
  {} as TransactionsContextDataProps
);

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
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
  
  return(
    <TransactionContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionContext.Provider>
  )
}