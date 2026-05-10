import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(Math.min(count + 5, 20))
  }

  const removeValue = () => {
    setCount(Math.max(count - 5, 0))
  }

  const resetValue = () => {
    setCount(0)
  }

  return (
    <>
      <h1>React Series</h1>

      <h2>Counter Value: {count}</h2>
      <h2>Counter Value: {count}</h2>

      {count === 0 && <p>Minimum value reached</p>}
      {count === 20 && <p>Maximum value reached</p>}

      <button onClick={addValue}>Add Value</button>

      <br />

      <button onClick={removeValue}>Remove Value</button>

      <br />

      <button onClick={resetValue}>Reset Value</button>
    </>
  )
}

export default App