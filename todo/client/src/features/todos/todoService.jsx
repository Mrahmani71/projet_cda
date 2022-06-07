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

// Config Todos Service
const todoService = {
  getTodos,
  createTodo,
  doTodo
}

export default todoService