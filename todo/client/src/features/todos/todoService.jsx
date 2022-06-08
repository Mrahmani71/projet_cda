import axios from "axios";
const API_URL = "/api/todos"

// ----- Get all todos
const getTodos = async(token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  const response = await axios.get(API_URL, config)
  return response.data
}

// ----- Create a new todo
const createTodo = async(data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const response = await axios.post(API_URL, data , config)
  return response.data
}

// ----- do a todo
const doTodo = async(data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  const response = await axios.post(`${API_URL}/do/${data.id}`, data , config)
  return response.data
}

// ------ delete a todo
const deleteTodo = async (data, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  const response = await axios.delete(`${API_URL}/${data}`, config)
  return response.data
}

// ----- edit a todo
const editTodo = async(data, token) => {
  const config = {
    headers: {Authorization : `Bearer ${token}`}
  }
  const response = await axios.put(`${API_URL}/${data.id}`, data, config)
  return response.data
}

// Config Todos Service
const todoService = {
  getTodos,
  createTodo,
  doTodo,
  deleteTodo,
  editTodo
}

export default todoService