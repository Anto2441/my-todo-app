import { useState } from 'react';

export interface CounterProps {
  /** Counter initial count*/
  initialCount?: number;
  /** Callback called when the user clicks on the decrement button */
  onDecrementCount?: () => void;
  /** Callback called when the user clicks on the increment button */
  onIncrementCount?: () => void;
}

/**
 * Counter component for user interaction
 */
export default function Counter({
  initialCount = 0,
  onDecrementCount,
  onIncrementCount,
}: CounterProps) {
  const [count, setCount] = useState(initialCount);

  function decrementCount() {
    setCount((currentCount) => (currentCount -= 1));

    if (onDecrementCount) {
      onDecrementCount();
    }
  }

  function incrementCount() {
    setCount((currentCount) => (currentCount += 1));

    if (onIncrementCount) {
      onIncrementCount();
    }
  }

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>{count}</p>
      <button type="button" onClick={decrementCount}>
        Decrement -
      </button>
      <button type="button" onClick={incrementCount}>
        Increment +
      </button>
    </div>
  );
}
