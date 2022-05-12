// Modules
import { useEffect, useState } from "react"
import axios from "axios"
import { ToastContainer } from 'react-toastify';

// Components
import Search from "./components/search/Search"
import AnimationMeteo from "./components/meteo-animation/AnimationMeteo"
import LonLat from "./components/lon-lat/LonLat"
import SeptDay from "./components/days/Days"
import Wind from "./components/wind/Wind"
import ToggleTheme from "./components/toggle-theme/ToggleTheme"
import ErrorNotif from "./components/notifications/ErrorNotif"

// Styles
import "./assets/styles/main.css"

export default function App() {

  const villeStorage = localStorage.getItem('ville')
  const [ville, setVille] = useState(villeStorage ? villeStorage : 'le mans')
  const [weather, setweather] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&appid=${import.meta.env.VITE_API}`)
      try {
        if (result.data) {
          setweather(result.data)
        }
      } catch (error) {
        throw new Error (error)
        
      }
    }
    fetchData()
  }, [ville])
  
  const search = (searchValue) => {
    if (searchValue.toLowerCase() !== villeStorage.toLowerCase()){
      setVille(searchValue)
      localStorage.setItem('ville', searchValue)
    } else {
      {ErrorNotif}
    }

  }

  // https://openweathermap.org/current
  return (
    <main className="main">
      {
        weather.name &&
        <>
          <ToggleTheme/>
          <Search search={search} />
          <h1 className="h1">{weather.name}</h1>
          <h2 className="h2">{weather.main.temp}</h2>
          <AnimationMeteo weather={weather} />

          <div className="details">
          <LonLat weather={weather} />
          <Wind weather={weather}/>
          </div>
          <h3 className="h3">Les Jours Suivants</h3>
          <SeptDay ville={ville}/>
        </>
      }
      <ToastContainer />
    </main>
  )
}
