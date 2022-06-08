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

async(data, thunkAPI) => {
  try {
    const token = thunkAPI.getState().actor.user.token
    return await todoService.createTodo(data, token)
    
  } catch (error) {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Do a todo
export const doTodo = createAsyncThunk('todo/do',

async(data, thunkAPI) => {
  try {
    const token = thunkAPI.getState().actor.user.token
    return await todoService.doTodo(data, token)
  } catch (error) {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Delete a todo
export const deleteTodo = createAsyncThunk('todo/delete', 
async(data, thunkAPI) => {
  try {
    const token = thunkAPI.getState().actor.user.token
    return await todoService.deleteTodo(data, token)
  } catch (error) {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Edit a todo
export const editTodo = createAsyncThunk('todo/edit',

async(data, thunkAPI) => {
  try {    
    const token = thunkAPI.getState().actor.user.token
    return await todoService.editTodo(data, token)
  } catch (error) {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
}

)

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
      if(action.payload.length > 0) {
        state.todos = action.payload.reverse();
      } else {
        state.todos = []
      }
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
      state.todos.unshift(action.payload)
    })
    .addCase(createTodo.rejected, (state, action) => {
      state.isLoading = false
      state.isError   = true
      state.message = action.payload
    })

    // Do a Todo
    .addCase(doTodo.pending, (state) => {
      state.isLoading = true
    })
    .addCase(doTodo.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload[0].id
      )
      if (action.payload[0].do === 1) {
        state.todos.push(action.payload[0])
      } else {
        state.todos.unshift(action.payload[0])
      }
    })
    .addCase(doTodo.rejected, (state, action)=> {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })

    // Delete a todo
    .addCase(deleteTodo.pending, (state) => {
      state.isLoading = true
    })
    .addCase(deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.todos     = state.todos.filter(todo => todo.id !== Number(action.payload.id))
    })
    .addCase(deleteTodo.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })

    // edit a todo
    .addCase(editTodo.pending, (state) => {
      state.isLoading = true
    })
    .addCase(editTodo.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.todos = state.todos.filter(todo => todo.id !== Number(action.payload[0].id))
      state.todos.unshift(action.payload[0])
    })
    .addCase(editTodo.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
  }
})

export const {reset} = todoSlice.actions
export default todoSlice.reducer