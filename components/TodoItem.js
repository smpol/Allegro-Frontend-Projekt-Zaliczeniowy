import { FaTrash, FaCheck, FaUndo } from "react-icons/fa";

export default function TodoItem({
  todo,
  onToggleComplete,
  onDelete,
  index,
  onDragStart,
  onDragOver,
  onDrop,
}) {
  return (
    <li
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDrop(e, index)}
      className={`flex justify-between items-center p-2 border rounded-lg mb-2 ${
        todo.completed ? "bg-green-100" : "bg-white dark:bg-gray-200"
      }`}
    >
      <div>
        <h3
          className={`text-lg font-semibold ${
            todo.completed ? "line-through" : ""
          }`}
        >
          {todo.title}
        </h3>
        <p className={`text-sm ${todo.completed ? "line-through" : ""}`}>
          {todo.description}
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onToggleComplete}
          className={`text-${
            todo.completed ? "yellow" : "green"
          }-600 hover:text-${todo.completed ? "yellow" : "green"}-800`}
        >
          {todo.completed ? <FaUndo /> : <FaCheck />}
        </button>
        <button onClick={onDelete} className="text-red-600 hover:text-red-800">
          <FaTrash />
        </button>
      </div>
    </li>
  );
}
