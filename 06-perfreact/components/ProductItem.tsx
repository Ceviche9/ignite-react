type ProductItemProps = {
  product: {
    id: number
    price: string
    title: string
  }

}

export const ProductItem = ({product}: ProductItemProps) => {
  return (
    <div>
      {product.title} - <strong>{product.title}</strong>
    </div>
  )
}