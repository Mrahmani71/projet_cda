import query from "../config.js";

// Get a todo
export async function getTodo(id) {
  return await query(`SELECT * from todos where id = ${id}`)
}

// Get All todos
export async function getTodos(user_id) {
  return await query(`SELECT * from todos where membre_id = ${user_id}`)
}

// Create todo
export async function createTodo(title, description, user_id) {
  return await query(`INSERT into todos SET title = "${title}", description = "${description}", membre_id = ${user_id}`)
}

// Edit a todo
export async function editTodo(title, description, id) {
  return await query(`UPDATE todos SET todos.title = "${title}", todos.description = "${description}" WHERE todos.id = ${id};`)
}

// Delte a todo
export async function deleteTodo(id) {

  return await query(`DELETE FROM todos WHERE id = ${id};`)
}

// Delte all todos a user
export async function deleteAllTodos(user_id) {
  return await query(` DELETE FROM todos WHERE membre_id = ${user_id};`)
}