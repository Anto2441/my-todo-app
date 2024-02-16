import { useCount, useDecrementCount, useIncrementCount } from "../../store";

/**
 * Counter component for user interaction
 */
export default function Counter() {
  const count = useCount();

  const decrementCount = useDecrementCount();

  const incrementCount = useIncrementCount();

  return (
    <div className="counter">
      <h1>Counter</h1>

      <p>{count}</p>

      <button type="button" onClick={() => decrementCount()}>
        Decrement -
      </button>

      <button type="button" onClick={() => incrementCount()}>
        Increment +
      </button>
    </div>
  );
}
