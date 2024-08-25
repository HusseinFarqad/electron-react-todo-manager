import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import FolderPicker from "./components/FolderPicker";
import Settings from "./components/Settings";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    loadDefaultFolder();
  }, []);

  const loadDefaultFolder = async () => {
    const folder = await window.electron.getDefaultFolder();
    if (folder) {
      setSelectedFolder(folder);
    }
  };

  useEffect(() => {
    if (selectedFolder) {
      loadTodos();
    }
  }, [selectedFolder]);

  const loadTodos = async () => {
    const filePath = `${selectedFolder}/todos.json`;
    const loadedTodos = await window.electron.readFile(filePath);
    setTodos(loadedTodos);
  };

  const saveTodos = async (updatedTodos) => {
    const filePath = `${selectedFolder}/todos.json`;
    await window.electron.writeFile(filePath, updatedTodos);
  };

  const addTodo = async (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    await saveTodos(updatedTodos);
  };

  const toggleTodo = async (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    await saveTodos(updatedTodos);
  };

  const deleteTodo = async (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    await saveTodos(updatedTodos);
  };

  const editTodo = async (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    await saveTodos(updatedTodos);
  };

  return (
    <div className="app">
      <header>
        <h1>Todo List</h1>
        <button
          onClick={() => setShowSettings(true)}
          className="settings-button"
        >
          Settings
        </button>
      </header>
      {!selectedFolder && <FolderPicker onFolderSelect={setSelectedFolder} />}
      {selectedFolder && (
        <TodoList
          todos={todos}
          onAddTodo={addTodo}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
        />
      )}
      {showSettings && (
        <Settings
          onClose={() => {
            setShowSettings(false);
            loadDefaultFolder();
          }}
        />
      )}
    </div>
  );
}

export default App;
