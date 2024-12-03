import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts";

function ToDoInput() {
  const [todo, setTodo] = useState("");
  const { addToDo } = useTodo();

  const add = (e) => {
    e.preventDefault()
    if (!todo) return;
    addToDo(todo);
    setTodo("");
  };
  return (
    <div className="flex justify-center items-center my-4">
      <form onSubmit={add} className="w-3/4 flex">
        <input
          type="text"
          placeholder="Write Todo..."
          className="flex-auto p-3 rounded-l-lg"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-3 w-14 rounded-r-lg">Add</button>
      </form>
    </div>
  );
}

export default ToDoInput;
