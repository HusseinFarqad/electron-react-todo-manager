import React, { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

function TodoList({
  todos,
  onAddTodo,
  onToggleTodo,
  onDeleteTodo,
  onEditTodo,
}) {
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const handleDeleteClick = (todo) => {
    setTodoToDelete(todo);
    setShowConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    if (todoToDelete) {
      onDeleteTodo(todoToDelete.id);
      setShowConfirmDelete(false);
      setTodoToDelete(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSaveEdit = (id) => {
    if (editText.trim()) {
      onEditTodo(id, editText);
      setEditingId(null);
    }
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="add-todo-input"
        />
        <button type="submit" className="add-todo-button">
          Add
        </button>
      </form>
      <ul className="todos">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => handleSaveEdit(todo.id)}
                onKeyPress={(e) => e.key === "Enter" && handleSaveEdit(todo.id)}
                autoFocus
                className="edit-todo-input"
              />
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span
                  className="todo-text"
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => handleDeleteClick(todo)}
                  className="delete-todo-button"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <ConfirmDelete
        isOpen={showConfirmDelete}
        onClose={() => setShowConfirmDelete(false)}
        onConfirm={handleConfirmDelete}
        todoText={todoToDelete?.text}
      />
    </div>
  );
}

export default TodoList;
