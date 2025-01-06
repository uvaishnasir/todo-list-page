import React from "react";
import { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

function Todolist() {
  //3 dummy todos
  const [todos, setTodos] = useState([
    { id: 1, text: "NOTE #1", completed: false },
    { id: 2, text: "NOTE #2", completed: false },
    { id: 3, text: "NOTE #3", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  //all handles
  const handleEdit = (id) => {
    const editedText = prompt("Edit your todo:");
    if (editedText) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: editedText } : todo
        )
      );
    }
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };
  return (
    <div className="container mx-auto mt-5 p-4" style={{ width: "750px" }}>
      <h3 className="heading text-center mb-3 ">TODO LIST</h3>

      {/* search bar */}
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search Note..."
        />
        <button className="btn btn-outline-secondary" type="button">
          <i className="bi bi-search"></i>
        </button>
      </div>

      {/* todo-list */}
      <div className="todo-list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="d-flex justify-content-between mx-2 my-3 border-bottom"
          >
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <label className={`${todo.completed ? "line-through" : ""} ms-2`}>
                {todo.text}
              </label>
            </div>
            <div>
              <button
                className="btn btn-outline-secondary btn-sm me-1"
                onClick={() => handleEdit(todo.id)}
              >
                <i className="bi bi-pencil"></i>
              </button>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => handleDelete(todo.id)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* floating add button*/}
      <button
        className="btn btn-primary rounded-circle position-fixed"
        style={{
          bottom: "20px",
          right: "400px",
        }}
        onClick={handleAdd}
      >
        <i className="bi bi-plus"></i>
      </button>
    </div>
  );
}

export default Todolist;
