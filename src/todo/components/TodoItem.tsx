import './TodoItem.css';

interface TodoItemProps {
  completed: boolean;
  id: number;
  onChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  title: string;
}

export default function TodoItem({
  completed,
  id,
  onChange,
  onDelete,
  title,
}: TodoItemProps) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => onChange(id, e.target.checked)}
      />
      <p style={completed ? { textDecoration: 'line-through' } : undefined}>
        {title}
      </p>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
}
