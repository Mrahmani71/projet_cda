import { configureStore } from '@reduxjs/toolkit'
import actorReducer from "../features/actor/actorSlice"
import todoReducer from "../features/todos/todoSlice"

export const store = configureStore({
  reducer: {
    actor: actorReducer,
    todos: todoReducer,
    messages: ""
  }
})