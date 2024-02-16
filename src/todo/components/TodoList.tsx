import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useUpdateCount } from "../../counter";

export default function TodoList() {
  const updateCount = useUpdateCount();

  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Do a ToDo List",
      completed: true,
    },
    {
      id: 2,
      text: "Walk the dog",
      completed: false,
    },
  ]);

  function addNewTask(text: string) {
    const newTask = {
      id: Math.random(),
      text,
      completed: false,
    };
    setTasks((currentTasks) => [...currentTasks, newTask]);
    setText("");
  }

  function handleCompleted(id: number, completed: boolean) {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        }

        return task;
      });
    });
  }

  function handleDelete(id: number) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  useEffect(() => {
    updateCount(tasks.length);
  }, [tasks.length, updateCount]);

  return (
    <>
      <div className="todo-list">
        <h1>To do List</h1>
        <h3>New task</h3>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addNewTask(text)} style={{ marginLeft: 100 }}>
          Add
        </button>
      </div>

      <div>
        <h3>My tasks</h3>
        {tasks.map((task) => {
          const { id, text, completed } = task;

          return (
            <TodoItem
              key={id}
              id={id}
              title={text}
              completed={completed}
              onChange={handleCompleted}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
}
