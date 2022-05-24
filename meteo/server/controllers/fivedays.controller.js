/* global localStorage */
const fetch = require('cross-fetch')

// Méthod GET pour récupérer la météo d'une ville
exports.getFiveWeather = async (req, res) => {
  const { ville } = req.params
  let data
  // Chercher par localStorage
  if (ville) {
    const resonse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_API}&q=${ville}&units=metric`)
    data = await resonse.json()

    if (Number(data.cod) === 404) {
      throw new Error("Hello error!")
    }
    else {
      res.status(200).json(data)
    }
  }
}

// Méthod POST pour chercher la météo d'une ville
exports.postFiveWeather = async (req, res) => {
  const { ville } = req.body
  if (!ville) {
    res.status(404).json({ message: "Input is empty" })
  } else {
    const resonse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_API}&q=${ville}&units=metric`)
    const data = await resonse.json()
    res.status(200).json({ body: data })
  }


}