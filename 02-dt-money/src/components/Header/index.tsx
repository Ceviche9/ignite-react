import logoImg from '../../Assets/logo.svg'
import { Container, Content } from './style'

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}