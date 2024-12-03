import { useEffect, useState } from "react";
import "./App.css";
import { ToDoInput, ToDoItem } from "./components";
import { ToDoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), todo, complete: false }, ...prev]);
  };

  const updateToDo = (id, todo) => {setTodos((prev)=>prev.map((elem)=>elem.id===id?{...elem, todo:todo}:elem))};

  const deleteToDo = (id) => {
    setTodos(todos.filter((elem) => elem.id !== id));
  };

  const toggleComplete = (id) => {setTodos((prev)=>prev.map((elem)=>elem.id===id?{...elem, complete:!elem.complete}:elem))};
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider
    value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}
    >
    <div className="bg-blue-950 h-screen p-3">
        <h1 className="text-3xl text-center text-white font-bold p-2">ToDo</h1>
        <ToDoInput />
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <ToDoItem todo={todo} />
            </div>
          );
        })}
    </div>
      </ToDoProvider>
  );
}

export default App;
