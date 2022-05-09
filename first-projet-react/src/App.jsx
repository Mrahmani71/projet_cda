import { useEffect, useState } from "react"
import axios from "axios"
function App() {
  const [wheater, setwheater] = useState()

  // https://openweathermap.org/current
  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=48.00611&lon=0.199556&appid=0ff1f1d3219100085377002952db296f').then((response) => {
      setwheater(response.data)
    })
  },[])

  return (
    <>
      <h1>{wheater.name}</h1>
      <h1>{wheater.weather[0].main}</h1>
    </>
  )
}

export default App
