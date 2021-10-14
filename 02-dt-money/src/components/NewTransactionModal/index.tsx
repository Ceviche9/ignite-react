import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { NewTransactionModalProps } from '../../protocols/componentsProtocols'
import { useTransactions } from '../../hooks/useTransactions'

import closeImg from '../../Assets/close.svg'
import incomeImg from '../../Assets/income.svg'
import outcomeImg from '../../Assets/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from './style'

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
  const {createTransaction} = useTransactions()

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)
  const [transactionType, setTransactionType] = useState('deposit')

  const handleClearModalValues = () => {
    setTitle('')
    setCategory('')
    setTransactionType('deposit')
    setAmount(0)
  }

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()
      
    await createTransaction({
      title,
      amount,
      category,
      type: transactionType,
      createdAt: new Date()
    })

    handleClearModalValues()
    onRequestClose()
  }

  return(
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button 
      type="button" 
      onClick={onRequestClose}
      className="react-modal-close"
    >
      <img src={closeImg} alt="Fechar modal" />
    </button>
    <Container
      onSubmit={handleCreateNewTransaction}
    >
      <h2>Cadastrar transação</h2>
      
      <input 
        placeholder="Título"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input 
        type="number"
        placeholder="Valor"
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
      />

      <TransactionTypeContainer>
        <RadioBox
          type="button"
          onClick={() => {setTransactionType('deposit')}}
          isActive={transactionType === 'deposit'}
          activeColor="green"
        >
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </RadioBox>
        <RadioBox
          type="button"
          onClick={() => {setTransactionType('withdraw')}}
          isActive={transactionType === 'withdraw'}
          activeColor="red"
        >
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>

      <input
        placeholder="Categoria"
        value={category}
        onChange={event => setCategory(event.target.value)}
      />

      <button type="submit">
        Cadastrar
      </button>
    </Container>
  </Modal>

  )
}