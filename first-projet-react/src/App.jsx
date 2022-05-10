import { useEffect, useState } from "react"
import axios from "axios"
import Search from "./components/Search"
import AnimationMeteo from "./components/meteo-animation/AnimationMeteo"
import "./assets/styles/main.css"
import LonLat from "./components/LonLat"
import SeptDay from "./components/SeptDay"
export default function App() {
  const villeStorage = localStorage.getItem('ville')
  const [ville, setVille] = useState(villeStorage ? villeStorage : 'le mans')
  const [api, setApi] = useState(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=0ff1f1d3219100085377002952db296f`)
  const [weather, setweather] = useState([])

  const getWeather = (api) => {
    axios
      .get(api)
      .then((res, err) => {
        // console.log('data', res)
        if (err) console.log('err', err)
        setweather(res.data)
      })
  }

  useEffect(() => {
    getWeather(api)
  }, [ville])

  const search = (searchValue) => {
    setVille(searchValue)
    setApi(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=0ff1f1d3219100085377002952db296f`)
    getWeather(api)
    localStorage.setItem('ville', searchValue)
  }

  // https://api.openweathermap.org/data/2.5/onecall?lat=48&lon=0.2&appid=0ff1f1d3219100085377002952db296f
  // https://openweathermap.org/current
  return (
    <>
      {
        weather.name &&
        <>
          <Search search={search} />
          <h1>{weather.name}</h1>
          <LonLat weather={weather} />
          <AnimationMeteo weather={weather} />
          <SeptDay/>
        </>
      }
    </>
  )
}
