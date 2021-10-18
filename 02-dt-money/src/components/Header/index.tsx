import logoImg from '../../Assets/logoIcon.svg'
import { Container, Content, LogoContainer } from './style'
import { HeaderProps } from '../../protocols/componentsProtocols'

export const Header = ({onOpenNewTransactionModal}: HeaderProps) => {
  return (
    <Container>
      <Content>
        <LogoContainer>
         <img src={logoImg} alt="dt money" />
         <h2>My Finances</h2>
        </LogoContainer>
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