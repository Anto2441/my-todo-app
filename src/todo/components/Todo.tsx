export interface TodoProps {
  completed: boolean;
  id: string;
  onCompleteChange: (checked: boolean) => void;
  onDelete: (id: string) => void;
  onTitleChange: (title: string) => void;
  title: string;
}

export default function Todo({
  completed,
  id,
  onCompleteChange,
  onDelete,
  onTitleChange,
  title,
}: TodoProps) {
  return (
    <div>
      <h1>{title}</h1>
      <input
        type="checkbox"
        name="completed"
        id="completed"
        onChange={(e) => onCompleteChange(e.target.checked)}
        checked={completed}
      />
      <input
        type="text"
        name="title"
        id="title"
        onChange={(e) => onTitleChange(e.target.value)}
        value={title}
      />
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
