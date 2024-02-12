import { useState } from "react"

interface CounterProps {
  /** Counter initial count*/
  initialCount?: number
}

/**
 * Counter component for user interaction
 */
export default function Counter({initialCount = 0}: CounterProps) {
  const [count, setCount] = useState(initialCount)

  function decrementCount() {
    setCount((currentCount) => currentCount -=1 )
  }

  function incrementCount() {
    setCount((currentCount) => currentCount += 1)
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button type="button" onClick={decrementCount}>Decrement -</button>
      <button type="button" onClick={incrementCount}>Increment +</button>
    </div>
  )
}