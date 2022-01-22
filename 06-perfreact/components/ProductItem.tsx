import { memo } from "react"

type ProductItemProps = {
  product: {
    id: number
    price: string
    title: string
  }
}

// Shallow compare => comparação rasa.
// {} === {} // false

function ProductItemComponent ({product}: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.title}</strong>
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