import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addToDo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const ToDoProvider = TodoContext.Provider;
