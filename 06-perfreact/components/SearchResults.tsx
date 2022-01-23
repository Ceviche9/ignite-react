import { useMemo } from "react"
import {ProductItem} from "./ProductItem"

type ResultsProps = {
  results: Array<{
    id: number
    price: number
    title: string
  }>
}

export const SearchResults = ({results}: ResultsProps) => {
  // Para não recalcular o valor total, a não ser que, os results mudem.
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + Number(product.price)
    }, 0)
  }, [results])

  return(
    <div>
      <h2>{totalPrice}</h2>
      {results.map(product => {
        return(
          <ProductItem
            key={product.id}
            product={product}
          />
        )
      })}
    </div>
  )
}

/*
  useMemo => O propósito do useMemo é evitar que algo que utilize muito processamento,
  seja refeito sem necessidade.

  1. Cálculos pesados.
  2. Igualdade referencial (quando a informação é repassada para componentes filhos).
  
*/