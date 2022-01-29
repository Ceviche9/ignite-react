import { render, screen } from "@testing-library/react";
// import { mocked } from "ts-jest/utils"
import {mocked} from "jest-mock"
import { useSession } from "next-auth/client"
import { SingInButton } from './index';

jest.mock('next-auth/client')

describe('SingInButton component', () => {
  it('should render correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    // A partir dessa linha, a proxima vez que a função useSession for chamada irá retornar:
    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <SingInButton/>
    )

    expect(screen.getByText('SingIn with GIthub')).toBeInTheDocument()
  })

  it('should render correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession)

    // A partir dessa linha, a proxima vez que a função useSession for chamada irá retornar:
    useSessionMocked.mockReturnValueOnce([
      {user: {name: 'John Doe', email: 'john@email.com'}, expires: 'fake-expires'}
      , false])

    render(
      <SingInButton/>
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})