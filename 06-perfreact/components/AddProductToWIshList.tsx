
export interface AddProductToWishListProps {
  onAddToWishLIst: () => void;
  onRequestClose: () => void;
}

export const AddProductToWishList = ({onAddToWishLIst, onRequestClose}: AddProductToWishListProps) => {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishLIst} >SIm</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}