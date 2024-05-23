"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import AddTodoModal from "@/components/AddTodoModal";
import TodoItem from "@/components/TodoItem";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const addTodo = (todo) => {
    setTodos([{ ...todo, completed: false }, ...todos]);
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleDragStart = (e, index) => {
    setDraggedItemIndex(index);
  };

  const handleDrop = (e, index) => {
    const newTodos = [...todos];
    const [draggedItem] = newTodos.splice(draggedItemIndex, 1);
    newTodos.splice(index, 0, draggedItem);
    setTodos(newTodos);
    setDraggedItemIndex(null);
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-800 pt-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Your Tasks
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 dark:bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500 mb-4"
        >
          Add Task
        </button>
        <ul className="w-full max-w-md">
          {todos
            .filter((todo) => !todo.completed)
            .map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                index={index}
                onToggleComplete={() => toggleComplete(index)}
                onDelete={() => deleteTodo(index)}
                onDragStart={handleDragStart}
                onDrop={handleDrop}
              />
            ))}
        </ul>
        {todos.some((todo) => todo.completed) && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 mt-8">
              Completed Tasks
            </h2>
            <ul className="w-full max-w-md">
              {todos
                .filter((todo) => todo.completed)
                .map((todo, index) => (
                  <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    onToggleComplete={() => toggleComplete(index)}
                    onDelete={() => deleteTodo(index)}
                    onDragStart={handleDragStart}
                    onDrop={handleDrop}
                  />
                ))}
            </ul>
          </>
        )}
      </main>
      <AddTodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addTodo}
      />
    </>
  );
}
