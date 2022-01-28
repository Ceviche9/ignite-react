import {render} from "@testing-library/react"
import { ActiveLink } from './index';

/* O Componente ActiveLink utiliza a função useRouter do Next,
  com o Jest é possível criar um mock dessa função.
*/
jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {
  it('should renders correctly', () => {
    const {debug, getByText} = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
  
    expect(getByText('Home')).toBeInTheDocument()
  })
  
  it('should receive active class if the link is currently active', () => {
    const {debug, getByText} = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
  
    expect(getByText('Home')).toHaveClass('active')
  })
})

