import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ActorService from "./actorService";

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
  user : user || null,
  isError : false,
  isSuccess: false,
  isLoading : false,
  message:'',
}

// Register a user
export const register = createAsyncThunk('actor/register',
async(user, thunkAPI) => {
  try {
    return await ActorService.register(user)

  } catch (error) {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Login a user
export const login = createAsyncThunk('actor/login',
async (user, thunkAPI) => {
  try {
    return await ActorService.login(user)

  } catch (error) {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const actorSlice = createSlice({
  name : "actor",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ""
    },
  },
  extraReducers: (builder) => {
    builder
    // Register
    .addCase(register.pending, (state) => {
      state.isLoading = true
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
    // Loading
    .addCase(login.pending, (state) => {
      state.isLoading = true
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
  }
})

export const { reset } = actorSlice.actions
export default actorSlice.reducer