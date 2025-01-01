import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  function increase() {
    count !== 15 ? setCount(count+1) : setCount(15)
  }

  function decrease(){
    count !== 0 ? setCount(count - 1) : setCount(0);
  }
  return (
    <>
      <p>This is couter ${count}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>down</button>
    </>
  )
}

export default App
