import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: { //has prop and function
        // if you have declare the fucntion upwards then give reference here don't call
        addTodo: (state, action) => {
            const todo = {
                id: nanoid,
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos.filter((todo) => todo.id !== action.payload);
        },

    }
})

// Now export the functionality
export const {addTodo, removeTodo} = todoSlice.actions;

// now export the reducer
export default todoSlice.reducer;