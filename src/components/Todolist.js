import React from "react";
import { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

function Todolist() {
  //3 dummy todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Note #1", completed: false },
    { id: 2, text: "Note #2", completed: false },
    { id: 3, text: "Note #3", completed: false },
  ]);
  //handles
  const handleEdit = (id) => {
    console.log("Edit");
  };
  const handleDelete = (id) => {
    // console.log("Edit");
  };
  const handleToggle = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
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
          <div key={todo.id} className="d-flex align-item-center mx-4 my-3">
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
        ))}
      </div>
    </div>
  );
}

export default Todolist;
