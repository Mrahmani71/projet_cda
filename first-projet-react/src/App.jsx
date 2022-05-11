import { useEffect, useState } from "react"
import axios from "axios"
import Search from "./components/Search"
import AnimationMeteo from "./components/meteo-animation/AnimationMeteo"
import LonLat from "./components/LonLat"
import SeptDay from "./components/SeptDay"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./assets/styles/main.css"
import "./style.scss"
import Wind from "./components/Wind"

export default function App() {
  const notify = () => toast.warn("Ceci est une demande en double", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
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
      notify()
    }

  }

  // https://openweathermap.org/current
  return (
    <main className="main">
      {
        weather.name &&
        <>
          <Search search={search} />
          <h1 className="h1">{weather.name}</h1>
          {/* <p className="p">{weather.}</p> */}
          <h2 className="h2">{weather.main.temp}</h2>
          <AnimationMeteo weather={weather} />

          <div className="details">
          <LonLat weather={weather} />
          <Wind weather={weather}/>
          </div>
          <h3 className="h3">les jours suivants</h3>
          <SeptDay ville={ville}/>
        </>
      }
      <ToastContainer />
    </main>
  )
}
