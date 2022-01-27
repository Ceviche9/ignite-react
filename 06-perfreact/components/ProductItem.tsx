import { memo, useState } from "react"
import {AddProductToWishListProps} from "./AddProductToWIshList"

import dynamic from "next/dynamic"
// import { AddProductToWishList } from "./AddProductToWIshList"

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  // Esse componente não está sendo exportado como padrão, por isso o uso do then.
  return import('./AddProductToWIshList').then(mod => mod.AddProductToWishList)
},{
  loading: () => <span>Carregando...</span>
})


type ProductItemProps = {
  product: {
    id: number
    price: number
    title: string
    priceFormatted: string
  }
  onAddToWishList: (id: number) => void
}

// Shallow compare => comparação rasa.
// {} === {} // false

function ProductItemComponent ({product, onAddToWishList}: ProductItemProps) {
  const [isAddingToWishLIst, setIsAddingToWishLIst] = useState(false)

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishLIst(true)}>Adicionar aos favoritos</button>

      {isAddingToWishLIst && (
        <AddProductToWishList
        onAddToWishLIst={() => onAddToWishList(product.id)}
        onRequestClose={() => setIsAddingToWishLIst(false)}
      />
      )}
    </div>
  )
}

// O memo evita que uma nova versão do component seja criado sem ser alterado.
export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  // Faz uma comparação profunda entre os objetos para identificar alguma mudança.
  return Object.is(prevProps.product, nextProps.product)
})

/*
  Situações para utilizar o memo =>
  1. Pure Functional Components: Funções puras são funções que quando recebem os mesmos parâmetros,
  retornam o mesmo resultado, como é o caso da função ProductItemComponent().
  2. Renders to often.
  3. Re-render with same props.
  4. Medium to big size.
*/