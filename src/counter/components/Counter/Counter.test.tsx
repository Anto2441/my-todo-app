import { afterEach, describe, expect, test, vi } from 'vitest';
import {
  cleanup,
  fireEvent,
  Matcher,
  render,
  screen,
} from '@testing-library/react';

import Counter, { CounterProps } from './Counter';

function renderCounter({
  initialCount = 0,
  onDecrementCount,
  onIncrementCount,
}: Partial<CounterProps> = {}) {
  render(
    <Counter
      initialCount={initialCount}
      onDecrementCount={onDecrementCount}
      onIncrementCount={onIncrementCount}
    />
  );

  const heading = () => screen.queryByRole('heading', { name: /Counter/i });
  const countValue = (result: Matcher) => screen.queryByText(result);
  const decrementButton = () =>
    screen.queryByRole('button', { name: /Decrement/i });
  const incrementButton = () =>
    screen.queryByRole('button', { name: /Increment/i });

  return {
    countValue,
    decrementButton,
    heading,
    incrementButton,
  };
}

describe('<Counter />', () => {
  test('should render correctly', () => {
    const { heading, countValue, decrementButton, incrementButton } =
      renderCounter();

    expect(heading()).toBeInTheDocument();
    expect(countValue(0)).toBeInTheDocument();
    expect(decrementButton()).toBeInTheDocument();
    expect(incrementButton()).toBeInTheDocument();
  });

  test('it should render 10 initially', () => {
    const { countValue } = renderCounter({ initialCount: 10 });

    expect(countValue(10)).toBeInTheDocument();
  });

  test('should decrement the counter', () => {
    const onDecrementCount = vi.fn();

    const { countValue, decrementButton } = renderCounter({ onDecrementCount });

    expect(countValue(0)).toBeInTheDocument();
    expect(decrementButton()).toBeInTheDocument();

    fireEvent.click(decrementButton()!);

    expect(countValue(-1)).toBeInTheDocument();
    expect(onDecrementCount).toHaveBeenCalledTimes(1);
  });

  test('should increment the counter', () => {
    const onIncrementCount = vi.fn();

    const { countValue, incrementButton } = renderCounter({ onIncrementCount });

    expect(countValue(0)).toBeInTheDocument();
    expect(incrementButton()).toBeInTheDocument();

    fireEvent.click(incrementButton()!);

    expect(countValue(1)).toBeInTheDocument();
    expect(onIncrementCount).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    cleanup();
  });
});
