import logoImg from '../../Assets/logo.svg'
import { Container, Content } from './style'
import { HeaderProps } from './types'

export const Header = ({onOpenNewTransactionModal}: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button 
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  )
}