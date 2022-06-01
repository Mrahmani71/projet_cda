import query from "../config.js";

// Get All messages
export async function getMessages(user_id) {
  return await query(` 
  SELECT * from messages`)
}

// Create message
export async function createMessage(sujet, message, email) {

  return await query(`
    INSERT into messages SET
      sujet          = ${sujet},
      message    = ${message},
      email      = ${email}
  `)
}

// Repond a message
export async function editMessage(id, title, description) {

  return await query(`
    UPDATE messages SET 
      messages.title = ${title},
      messages.description = ${description}
    WHERE messages.id = ${id};
  
  `)
}

// Delte a message
export async function deleteMessage(id) {

  return await query(`
    DELETE FROM messages WHERE id = ${id};
  `)
}

// Delte all messages a user
export async function deleteAllMessages(user_id) {

  return await query(`
    DELETE FROM messages WHERE membre_id = ${user_id};
  `)
}