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

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
  })
})