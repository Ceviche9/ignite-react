import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0)

  const handleCounter = () => {
    setCounter(counter + 1)
  }

  return(
    <div>
      <h2>Valor: {counter}</h2>
      <button 
        type="button" 
        onClick={handleCounter}
        >Increment +1</button>
    </div>
  )
}