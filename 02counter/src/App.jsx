import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
    console.log("Value added", count + 1)
  }

  const removeValue = () => {
    if(count>+0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>React Series</h1>

      <h2>Counter Value: {count}</h2>

      <button onClick={addValue}>Add Value</button>

      <br />

      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App