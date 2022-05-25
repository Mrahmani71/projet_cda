/* global localStorage */
const fetch = require('cross-fetch')

// Méthod GET pour récupérer la météo d'une ville
exports.getTodayWeather = async (req, res) => {
  const {ville} = req.params
  let data
  // Chercher par localStorage
  if (ville) {
    const resonse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&appid=${process.env.REACT_APP_API}`)
    data = await resonse.json()

    if (Number(data.cod) === 404) {
      throw new Error("Hello error!")
    }
    else {
      res.status(200).json(data)
    }
  }

}