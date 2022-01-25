import { useMemo } from "react"
import {ProductItem} from "./ProductItem"

type ResultsProps = {
  results: Array<{
    id: number
    price: number
    title: string
    priceFormatted: string
  }>
  onAddToWishList: (id: number) => void
  totalPrice: number
}

export const SearchResults = ({results, onAddToWishList, totalPrice}: ResultsProps) => {

  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map(product => {
        return(
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishList={onAddToWishList}
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