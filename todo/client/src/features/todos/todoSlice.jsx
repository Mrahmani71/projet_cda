import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import todoService from "./todoService"

const initialState = {
  todos: [],
  isError: false,
  isSuccess: false,
  isLoading : false,
   message : ''
}

// Get All todos a user
export const getTodos = createAsyncThunk('todos/get', 
async(_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().actor.user.token
    return await todoService.getTodos(token)

  } catch (error) {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Create a todo
export const createTodo = createAsyncThunk('todo/create',

async(user, thunkAPI) => {
  try {
    const token = thunkAPI.getState().actor.token
    return await todoService.createTodo(user, token)
    
  } catch (error) {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError   = false
      state.message   = ""
    },
  },
  extraReducers: (builder) => {
    builder

    // Get todos
    .addCase(getTodos.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getTodos.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.todos = action.payload.reverse();
    })
    .addCase(getTodos.rejected, (state, action) => {
      state.isLoading = false
      state.isError   = true
      state.message   = action.payload
      state.todos     = []
    })

    // Create a Todo
    .addCase(createTodo.pending, (state) => {
      state.isLoading = true
    })
    .addCase(createTodo.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.todos.push(action.payload)
      state.todos = state.todos.filter(activ => activ.title)
    })
    .addCase(createTodo.rejected, (state, action) => {
      state.isLoading = false
      state.isError   = true
      state.message = action.payload
      state.todos = []
    })
  }
})

export const {reset} = todoSlice.actions
export default todoSlice.reducer