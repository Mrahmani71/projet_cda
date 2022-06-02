import query from "../config.js";

// Get All actors
export async function getActors() {
  return await query(` 
  SELECT * from actors
  `)
}

// Get a actor
export async function getActor(key, value) {
  return await query(`SELECT * from actors where ${key} = "${value}"`)
}

// Create an actor
export async function createActor(email, password) {

  return await query(`INSERT into actors SET email = ${email}, password = "${password}"`)
}

// Edit an actor
export async function editActor(id, name, email) {

  return await query(`
    UPDATE actors SET 
      actors.name = ${name},
      actors.email = ${email}
    WHERE actors.id = ${id};
  
  `)
}

// Delete an actor
export async function deleteActor(id) {

  return await query(`
    DELETE FROM actors WHERE id = ${id};
  `)
}
