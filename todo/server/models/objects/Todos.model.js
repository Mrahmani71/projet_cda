import query from "../config.js";

export default class Todos {
  constructor({ id, title, description, membre_id, doit, date }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.membre_id = membre_id;
    this.doit = doit;
    this.date = date
  }

  // Get a Todo
  static async getTodo(id) {
    const result = await query(`SELECT * from todos where id = ${id}`)
    const todo = result[0]
    if (todo === undefined) {
      throw new Error('Todo was not found')
    }
    return new Todos(todo)
  }

  // Get last Todo
  static async getLastTodo() {
    const result = await query(`SELECT * from todos ORDER BY id DESC LIMIT 1`)
    const todo = result[0]
    if (todo === undefined) {
      throw new Error('Todo was not found')
    }
    return new Todos(todo)
  }

  // Get All Todos
  static async getTodos(user_id) {
    const result = await query(`SELECT * from todos where membre_id = ${user_id}`)
    const todo = result
    if (todo[0] === undefined) {
      throw new Error('Any Todo was not found')
    }
    return todo.map(t => new Todos(t));
  }

  // Create a todo
  static async createTodo(title, description, user_id) {
    const result = await query(`INSERT into todos SET title = "${title}", description = "${description}", membre_id = ${user_id}`)

    console.log(result);
 
    // if (todo[0] === undefined) {
    //   throw new Error('Any Todo was not found')
    // }
    // return todo.map(t => new Todos(t));
  }


}