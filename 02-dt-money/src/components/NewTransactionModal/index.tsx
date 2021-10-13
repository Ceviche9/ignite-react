import Modal from 'react-modal'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void;
}

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
  return(
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    <h2>Cadastrar transação</h2>
  </Modal>

  )
}