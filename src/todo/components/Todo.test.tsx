import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Todo, { TodoProps } from "./Todo";

function renderTodo({
  completed = false,
  id = "1",
  onCompleteChange = () => undefined,
  onDelete = () => undefined,
  onTitleChange = () => undefined,
  title = "",
}: Partial<TodoProps> = {}) {
  render(
    <Todo
      completed={completed}
      id={id}
      onCompleteChange={onCompleteChange}
      onDelete={onDelete}
      onTitleChange={onTitleChange}
      title={title}
    />
  );

  const heading = () => screen.queryByRole("heading");
  const input = () => screen.queryByRole("textbox");
  const checkbox = () => screen.queryByRole("checkbox");
  const deleteButton = () => screen.queryByRole("button", { name: /Delete/i });

  return {
    checkbox,
    deleteButton,
    heading,
    input,
  };
}

describe("<Todo />", () => {
  test("should render correctly", () => {
    const { checkbox, deleteButton, heading, input } = renderTodo();

    expect(heading()).toBeInTheDocument();
    expect(input()).toBeInTheDocument();
    expect(checkbox()).toBeInTheDocument();
    expect(checkbox()).not.toBeChecked();
    expect(deleteButton()).toBeInTheDocument();
  });

  test("value should update the title", () => {
    const onTitleChange = vi.fn();

    const { input } = renderTodo({ title: "", onTitleChange });

    expect(input()).toHaveDisplayValue("");
    fireEvent.change(input()!, { target: { value: "toto" } });
    //expect(input()).toHaveDisplayValue('toto');
    expect(onTitleChange).toHaveBeenCalledOnce();
    expect(onTitleChange).toHaveBeenCalledWith("toto");
  });

  afterEach(() => {
    cleanup();
  });
});
