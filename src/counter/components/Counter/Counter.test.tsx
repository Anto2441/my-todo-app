import { afterEach, describe, expect, test } from "vitest";
import {
  cleanup,
  fireEvent,
  Matcher,
  render,
  screen,
} from "@testing-library/react";

import Counter from "./Counter";

function renderCounter() {
  render(<Counter />);

  const heading = () => screen.queryByRole("heading", { name: /Counter/i });
  const countValue = (result: Matcher) => screen.queryByText(result);
  const decrementButton = () =>
    screen.queryByRole("button", { name: /Decrement/i });
  const incrementButton = () =>
    screen.queryByRole("button", { name: /Increment/i });

  return {
    countValue,
    decrementButton,
    heading,
    incrementButton,
  };
}

describe("<Counter />", () => {
  test("should render correctly", () => {
    const { heading, countValue, decrementButton, incrementButton } =
      renderCounter();

    expect(heading()).toBeInTheDocument();
    expect(countValue(0)).toBeInTheDocument();
    expect(decrementButton()).toBeInTheDocument();
    expect(incrementButton()).toBeInTheDocument();
  });

  test("should decrement the counter", () => {
    const { countValue, decrementButton } = renderCounter();

    expect(countValue(0)).toBeInTheDocument();
    expect(decrementButton()).toBeInTheDocument();

    fireEvent.click(decrementButton()!);

    expect(countValue(-1)).toBeInTheDocument();
  });

  test("should increment the counter", () => {
    const { countValue, incrementButton } = renderCounter();

    expect(countValue(0)).toBeInTheDocument();
    expect(incrementButton()).toBeInTheDocument();

    fireEvent.click(incrementButton()!);

    expect(countValue(1)).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
});
