import {render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react"
import { Async } from "./Async"



it('should renders correctly', async () => {
  render(<Async/>)


  expect(screen.getByText('Hello World')).toBeInTheDocument()
  // Esse método espera o componente aparecer na tela.
  // Também é possível passar um tempo máximo para o jest esperar.
  expect(await screen.findByText('Button', {}, {timeout: 1000})).toBeInTheDocument()
})

it('should renders correctly', async () => {
  render(<Async/>)


  expect(screen.getByText('Hello World')).toBeInTheDocument()
  // Esse método espera o componente aparecer na tela.
  // Também é possível passar um tempo máximo para o jest esperar.
  // expect(await screen.findByText('Button', {}, {timeout: 1000})).toBeInTheDocument()

  // Nesse método ele ficará executando esse código até que o expect passe.
  // Esse método também pode receber configurações no seu segundo parâmetro.
  await waitFor(() => {
    return expect(screen.getByText('Button')).toBeInTheDocument()
  })
})

it('should not have invisible button', async () => {
  render(<Async/>)

  await waitForElementToBeRemoved(screen.queryByText('Invisible Button'))
})