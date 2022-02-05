import { render, screen } from "@testing-library/react";
import { Header } from './index';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

/*
  Dentro do Header tem o componente  <SingInButton /> que utiliza uma função do next 
*/
jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

describe('Header component', () => {
  it('should render correctly', () => {
    render(
      <Header/>
    )


    // Para abrir uma página no navegador que mostra a melhor forma de pegar elementos do componente.
    screen.logTestingPlaygroundURL()

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
  })
})