import { render, screen, fireEvent } from "@testing-library/react";
import { mocked } from "jest-mock"
import { signIn, useSession } from "next-auth/client"
import { useRouter } from "next/router"
import { SubscribeButton } from './index';

jest.mock('next-auth/client')
jest.mock('next/router')

describe('SubscribeButton', () => {
  it('should render correctly', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(
      <SubscribeButton/>
    )

    expect(screen.getByText('Subscribe Now')).toBeInTheDocument()
  })

  // Esse teste irá verificar se a função SingIn do next é chamada caso o usuário não esteja autenticado.
  it('should redirects user to sign in when not authenticated', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])
    // utilizando o mocked para chamar a função.
    const signInMocked = mocked(signIn)

    // renderizando o botão
    render(
      <SubscribeButton/>
    )

    // pegando o HTML do botão.
    const subscribeButton = screen.getByText('Subscribe Now')

    // disparando o evento de click
    fireEvent.click(subscribeButton)

    // verificando se a função foi chamada
    expect(signInMocked).toHaveBeenCalled()
  })

  it('should redirects to posts when user has a subscription', () => {
    const useRouterMocked = mocked(useRouter)
    const useSessionMocked = mocked(useSession)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValue([
      {
        user: {
          name: 'John Doe',
          email: 'john@email.com'
        }, 
        activeSubscription: 'fake-value',
        expires: 'fake-value'
      }
      , false])

    useRouterMocked.mockReturnValue({
      push: pushMock
    } as any)    

    render(
      <SubscribeButton/>
    )

    const subscribeButton = screen.getByText('Subscribe Now')

    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalledWith('/posts')
  })
})