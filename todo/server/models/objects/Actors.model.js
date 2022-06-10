import query from "../config.js";
import AppError from "../../helpers/appError.js"
import { checkChar } from "../../helpers/regex.js";
import Todos from "./Todos.model.js";

export default class Actors {
  constructor({ id, name, email, token, create_date, role, updated }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.token = token;
    this.create_date = create_date;
    this.role = role;
    this.updated = updated
  }

  // Get All Actors
  static async getAllActors() {
    const result = await query(`SELECT * from actors`)
    if (result[0] === undefined) {
      throw new AppError('any User was not found', 404)
    }
    return result.map(a => new Actors(a))
  }

  // Get an Actor
  static async getActor(keys, values) {
    const result = await query(`SELECT * from actors where ${keys} = "${values}"`)
    if (result.length === 0) {
      const err = new Error()
      err.message ="user was not found"
      err.statusCode = 404
      return err
    }
    if (result.length > 0) {
      return new Actors(result[0])
    }
    else {
      throw new AppError("invalid Error", 404)
    }
  }

  // Create an actor
  static async createActor(email, password) {
    const Email = await checkChar(email)
    const Password = await checkChar(password)
    const checkUser = await this.getActor('email', Email)

    if (checkUser['id']) {
      throw new AppError("User Alrady Exist", 400)
    }

    const result = await query(`INSERT into actors SET email = "${Email}", password = "${Password}"`)
    const getUser = await this.getActor('id', result.insertId)
    return new Actors(getUser)

  }

  // Edit an Actor
  static async editActor(id, name, email) {

    const Name = await checkChar(name)
    const Email = await checkChar(email)

    const result = await query(`UPDATE actors SET actors.name = "${Name}", actors.email = "${Email}", actors.updated = (NOW() + INTERVAL 2 HOUR) WHERE actors.id = ${id}`)

    if (!result.affectedRows || result.affectedRows !== 1) {
      throw new AppError('Request is not correct', 400)
    }
    const getUser = await this.getActor('id', id)

    if (getUser["id"] === undefined) {
      throw new AppError('user was not found', 404)
    }
    return new Actors(getUser)
  }

  // Delete an Actor
  static async deleteActor(id) {
    const result = await query(`DELETE FROM actors WHERE id = ${id}`)
    if (!result.affectedRows || result.affectedRows !== 1) {
      throw new AppError('Request is not correct', 400)
    }
    // Delete All todos an actor
    if (result.affectedRows === 1) {
      await Todos.deleteAllTodo(id)
    }

    const msg = { message: "user was deleted" }
    return msg
  }
}