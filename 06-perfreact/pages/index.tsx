import { FormEvent, useCallback, useState } from "react"
import { SearchResults } from '../components/SearchResults';


type resultsProps = {
  totalPrice: number
  data: any[]
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResult] = useState<resultsProps>({
    totalPrice: 0,
    data: []
  })

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()

    if(!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const products = data.map(product => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price)

      }
    })


    const totalPrice = data.reduce((total, product) => {
      return total + Number(product.price)
    }, 0)

    setResult({totalPrice, data: products});
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, []) 

  return (
    <div>
      <h1>Search</h1>


      <form onSubmit={handleSearch}>
        <input 
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">Buscar</button>
      </form>


      {
      /*
        Toda vez que o componente Home for renderizado, as suas funções serão recriadas,
        ou seja, vão ocupar um local diferente na memória. E como a função addToWishList()
        é repassada para o componente <SearchResults/>, ele será renderizado novamente e
        todos os componentes que utilizam essa função. Por isso, nesse caso é importante utilizar
        o useCallback.
      */
      }

      <SearchResults 
        results={results.data}
        totalPrice={results.totalPrice}
        onAddToWishList={addToWishList}
      />
    </div>
  )
}

/*
  Fluxo de renderização do React =>
  1. Criar uma nova versão do componente.
  2. Comparar com a versão anterior.
  3. Se houveram alterações, vai atualizar o que alterou.
*/