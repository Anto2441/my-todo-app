import { useCount, useDecrementCount, useIncrementCount } from "../../store";

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
export default function Counter({ initialCount = 0 }: CounterProps) {
  const count = useCount();

  const decrementCount = useDecrementCount();

  const incrementCount = useIncrementCount();

  console.log(initialCount);

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
