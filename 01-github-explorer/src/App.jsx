import { Counter } from './components/Counter'
import { Repository } from './components/Repository/List'
import './styles/global.scss'

export function App() {
  return(
    <>
      <Repository/>
      <Counter/>
    </>
  )
}