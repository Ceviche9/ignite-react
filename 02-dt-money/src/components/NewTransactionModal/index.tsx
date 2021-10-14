import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../Assets/close.svg'
import incomeImg from '../../Assets/income.svg'
import outcomeImg from '../../Assets/outcome.svg'
import { api } from '../../services/api'
import { Container, TransactionTypeContainer, RadioBox } from './style'
import { NewTransactionModalProps } from '../protocols/componentsProtocols'

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)
  const [transactionType, setTransactionType] = useState('deposit')


  const handleCreateNewTransaction = (event: FormEvent) => {
  event.preventDefault()

  const data = {
    title, 
    value, 
    category, 
    transactionType
  }
  
  api.post('/transactions', data)
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
        value={value}
        onChange={event => setValue(Number(event.target.value))}
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