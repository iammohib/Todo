import React, { useEffect, useRef, useState } from "react";
import { useTodo } from "../contexts";

function ToDoItem({ todo }) {
  const [newtodo, setNewTodo] = useState(todo.todo);
  const [isEditable, setIsEditable] = useState(false);
  const [editSave, setEditSave] = useState("Edit");
  const { updateToDo, deleteToDo, toggleComplete } = useTodo();

  const inputElem = useRef(null);

  const editAndUpdate = async () => {
    if (!isEditable && !(todo.complete)) {
      await setIsEditable(true);
      inputElem.current.focus();
      setEditSave("Save");
    } else{
      updateToDo(todo.id, newtodo);
      setIsEditable(false);
      setEditSave("Edit");
    }
  };
  
  const toggleCompleteFunc = () => {
    if(todo.todo!==newtodo) return alert("Save the todo, befor mark it done!");
    toggleComplete(todo.id)
    setEditSave("Edit");
    setIsEditable(false);
  }
  return (
    <div className="flex justify-center items-center my-2">
      <div className="p-2 w-3/4 flex bg-amber-200 rounded-lg justify-center items-center">
        <input
          type="checkbox"
          className="cursor-pointer h-6 w-6 text-blue-600 form-checkbox focus:ring-blue-500 border-gray-300 rounded"
          checked={todo.complete}
          onChange={() => toggleCompleteFunc()}
        />
        <input
          ref={inputElem}
          className={`p-2 rounded-lg bg-transparent ${
            todo.complete ? "line-through " : ""
          } ${isEditable ? "border-black border-2" : ""} flex-auto`}
          value={newtodo}
          onChange={(e) => setNewTodo(e.target.value)}
          readOnly={!isEditable}
        />
        <button
          className={`rounded-lg w-14 ${
            editSave === "Edit" ? "bg-green-600" : "bg-blue-600"
          }  text-white ml-1 p-1`}
          onClick={() => editAndUpdate()}
        >
          {editSave}
        </button>
        <button
          className="rounded-lg w-14 bg-red-600 text-white ml-1 p-1"
          onClick={() => deleteToDo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
