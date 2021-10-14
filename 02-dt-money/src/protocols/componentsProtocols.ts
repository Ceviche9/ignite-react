import { ReactNode } from "react"

export type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void;
}

export type TransactionProps = {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string | Date
}

export type TransactionInput = Omit<TransactionProps, 'id'>

export type TransactionsContextDataProps = {
  transactions: TransactionProps[]
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export type ResponseProps = {
  transactions: TransactionProps[]
}

export type TransactionsProviderProps = {
  children: ReactNode
}