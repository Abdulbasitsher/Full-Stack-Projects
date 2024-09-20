import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [{id:1, text: "Hello world"}]
} 

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: 'action.payload'
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter()
        },
    }
})