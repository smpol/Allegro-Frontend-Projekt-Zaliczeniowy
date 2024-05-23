"use client";
import { useState } from "react";

export default function AddTodoModal({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (title.trim()) {
      if (!description.trim()) {
        onAdd({ title, description: "No description set" });
      } else {
        onAdd({ title, description });
      }
      setTitle("");
      setDescription("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-100 p-4 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">Add Task</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="bg-blue-600 dark:bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
