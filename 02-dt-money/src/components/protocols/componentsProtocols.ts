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
  createdAt: string
}

export type ResponseProps = {
  transactions: TransactionProps[]
}
