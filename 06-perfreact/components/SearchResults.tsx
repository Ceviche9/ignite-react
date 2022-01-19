import {ProductItem} from "./ProductItem"


type ResultsProps = {
  results: Array<{
    id: number
    price: string
    title: string
  }>
}

export const SearchResults = ({results}: ResultsProps) => {
  return(
    <div>
      {results.map(product => {
        return(
          <ProductItem
            product={product}
          />
        )
      })}
    </div>
  )
}