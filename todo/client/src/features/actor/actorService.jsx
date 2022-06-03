import axios from "axios"
const API_URL = "/api/actors"

// ----- Register a user
const register = async(data) => {
  console.log("dataaa", data);
  const response = await axios.post(API_URL, data)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// ----- login a user
const login = async(data) => {
  const response = await axios.post(API_URL + "/login", data)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// ----- Edit a user

// ----- Delete a user


// Config Actor Service
const ActorService = {
  register,
  login
}

export default ActorService