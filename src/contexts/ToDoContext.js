import { createContext, useContext } from "react";

// export const ToDoContext = createContext({
//     todos:[
//         {
//             id:1,
//             todo:"ToDo Msg",
//             complete: false,
//         }
//     ],
//     addToDo: (todo)=> {},
//     updateToDo: (id,todo)=> {},
//     deleteToDo: (id)=> {},
//     toggleComplete: (id)=> {},
// });
export const ToDoContext = createContext();

export const ToDoProvider = ToDoContext.Provider;

export const useTodo = () => {
    return useContext(ToDoContext)
}