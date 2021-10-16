import { throws } from 'assert';
import { error } from 'console';
import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = cart.map(product => ({...product}))
      // Retorna o produto caso ele exista no carrinho.
      const productExistsOnCart = updatedCart.find(product => product.id === productId)

      const stock = await api.get(`/stock/${productId}`)
      // Quantidade do produto no stock.
      const stockAmount = stock.data.amount

      // Quantidade atual do produto no carrinho.
      const currentAmount = productExistsOnCart ? productExistsOnCart.amount : 0
      const amount = currentAmount + 1

      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      } else {
        // Se o produto já existir no carrinho apenas será necessário alterar a sua quantidade.
        if (productExistsOnCart) {
          const newCart = cart.map(product => product.id === productId ? {...product, amount} : product)
          setCart(newCart)
          // Caso o produto não exista, a chave amount é criada entro o objeto "product" e é adicionado ao carrinho.
        } else {
          const product = await api.get(`/products/${productId}`)
  
          const newProduct = {
            ...product.data,
            amount
          }
          updatedCart.push(newProduct)
          setCart(updatedCart)
        }
      }
      // Salvando no localStorage.
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const productExistsOnCart = cart.find(product => product.id === productId)

      if (productExistsOnCart) {
        const removedProduct = cart.filter(product => product.id !== productId)
        setCart(removedProduct)
        localStorage.setItem('@RocketShoes:cart', JSON.stringify(removedProduct))
      } else {
        toast.error('Erro na remoção do produto')
        return
      }
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      const productCurrentInfo = cart.find(product => product.id === productId)
      if (productCurrentInfo) {
        const currentProductAmount = productCurrentInfo.amount

        if (amount > currentProductAmount) {
          const stock = await api.get(`/stock/${productId}`)
          // Quantidade do produto no stock.
          const stockAmount = stock.data.amount

          if (amount > stockAmount) {
            toast.error('Quantidade solicitada fora de estoque')
            return
          }  
        }

        if (amount < 1 ) throw Error()

        const newCart = cart.map(product => product.id === productId ? {...product, amount} : product)
        setCart(newCart)
        // Salvando no localStorage.
        localStorage.setItem('@RocketShoes:cart', JSON.stringify(newCart))
      } else {
        throw Error()
      }

    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
