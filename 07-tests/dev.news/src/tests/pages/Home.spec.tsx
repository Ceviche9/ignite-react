import { render, screen } from "@testing-library/react"
import { stripe } from "../../services/stripe"
import { mocked } from "jest-mock"
import Home, { getStaticProps } from "../../pages"


jest.mock('next/router')
jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})
jest.mock('../../services/stripe.ts')

describe('Home page', () => {
  it('should renders correctly', () => {
    render(<Home product={{priceId: 'fake-price-id', amount: 'R$10,00'}} />)

    expect(screen.getByText('for R$10,00 month')).toBeInTheDocument()
  })

  // Testando o getStaticProps da página Home.
  it('should loads initial data', async () => {
    const retrieveStripePricesMocked = mocked(stripe.prices.retrieve)

    // Quando a função for uma promise.
    retrieveStripePricesMocked.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 1000,
    }as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$10.00'
          }
        }
      })
    )

  })
})