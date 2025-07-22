import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  function increm() {
    setCount((prev) => prev + 1)
  }

  function decrem() {
    setCount((prev) => prev - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increm}>Increm</button>
      <button onClick={decrem}>Decrem</button>
    </div>
  )
}
