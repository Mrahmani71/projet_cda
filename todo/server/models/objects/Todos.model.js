import query from "../config.js";
import AppError from "../../helpers/appError.js"
import { checkChar } from "../../helpers/regex.js";
export default class Todos {
  constructor({ id, title, description, membre_id, doit, date, updated }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.membre_id = membre_id;
    this.doit = doit;
    this.date = date;
    this.updated = updated
  }

  // Verifier Auth 
  static async CheckAuth(todo_id, membre_id) {
    const result = await this.getTodo(todo_id)
    console.log(result);
    if (result.membre_id !== membre_id) {
      throw new AppError('Not auth', 403)
    }
  }

  // Get a Todo
  static async getTodo(id) {
    const result = await query(`SELECT * from todos where id = ${id}`)
    const todo = result[0]
    if (todo === undefined) {
      throw new AppError('todo was not found', 404)
    }
    return new Todos(todo)
  }

  // Get last Todo
  static async getLastTodo() {
    const result = await query(`SELECT * from todos ORDER BY id DESC LIMIT 1`)
    const todo = result[0]
    if (todo === undefined) {
      throw new AppError('Todo was not found', 404)
    }
    return new Todos(todo)
  }

  // Get All Todos
  static async getTodos(user_id) {

    const result = await query(`SELECT * from todos where membre_id = ${user_id}`)
    const todo = result
    if (todo[0] === undefined) {
      throw new AppError('Any Todo was not found', 404)
    }
    return todo.map(t => new Todos(t));
  }

  // Create a todo
  static async createTodo(title, description, user_id) {
    const Title = await checkChar(title)
    const Description = await checkChar(description)

    const result = await query(`INSERT into todos SET title = "${Title}", description = "${Description}", membre_id = ${user_id}`)

    if (!result.affectedRows || result.affectedRows !== 1) {
      throw new AppError('Request is not correct', 400)
    }
    const todo = await this.getTodo(result.insertId)
    if (todo === undefined) {
      throw new AppError('Todo was not found', 404)
    }
    return new Todos(todo)
  }

  // Edit a todo
  static async editTodo(title, description, todo_id, membre_id) {
    const Title = await checkChar(title)
    const Description = await checkChar(description)

    await this.CheckAuth(todo_id, membre_id)
    const result = await query(`UPDATE todos SET todos.title = "${Title}", todos.description = "${Description}", 
    todos.updated = (NOW() + INTERVAL 2 HOUR) WHERE todos.id = ${todo_id}`)

    if (!result.affectedRows || result.affectedRows !== 1) {
      throw new AppError('Request is not correct', 400)
    }
    const todo = await this.getTodo(todo_id)
    if (todo === undefined) {
      throw new AppError('Todo was not found', 404)
    }
    return new Todos(todo)
  }

  // Delete a todo
  static async deleteTodo(todo_id, membre_id) {
    await this.CheckAuth(todo_id, membre_id)
    const result = await query(`DELETE FROM todos WHERE id = ${todo_id};`)
    if (!result.affectedRows || result.affectedRows !== 1) {
      throw new AppError('Request is not correct', 400)
    }
    const msg = { message: "todo was deleted" }
    return msg
  }

  // Delte all todos a user
  static async deleteAllTodo(membre_id) {
    const result = await query(`DELETE FROM todos WHERE membre_id = ${membre_id};`)

    if (!result.affectedRows && result.affectedRows !== 0) {
      throw new AppError('Request is not correct', 400)
    }

    if (result.affectedRows === 0) {
      const msg = { message: "No activities were deleted" }
      return msg
    }

    const msg = { message: "All todos was deleted" }
    return msg
  }

}