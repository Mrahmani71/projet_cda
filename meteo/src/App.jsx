// // Modules
import { useEffect } from "react"
import cb from "classnames"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Search from "./components/search/Search"
import AnimationMeteo from "./components/meteo-animation/AnimationMeteo"
import LonLat from "./components/lon-lat/LonLat"
import SeptDay from "./components/days/Days"
import Wind from "./components/wind/Wind"
import ToggleTheme from "./components/toggle-theme/ToggleTheme"
import ErrorNotif from "./components/notifications/ErrorNotif"

// redux
import { useDispatch, useSelector } from "react-redux";
import { getWeatherLocation, getWeatherToday } from "./featurs/today/todaySlice";


// Styles
import "./assets/styles/main.css"
import { getFiveDays, getFiveLocation } from "./featurs/fiveDay/fiveDaySlice";

export default function App() {
  const ville = localStorage.getItem("city")
  const dispatch = useDispatch()
  const { today, isLoading, isError, message } = useSelector(
    (state) => state.today
  )

  // function getLongAndLat() {
  //   return new Promise((resolve, reject) =>
  //     navigator.geolocation.getCurrentPosition(resolve, reject)
  //   );
  // }

  useEffect(() => {

    if (isError) {
      console.log(message)
    }

    // if (!ville) {
    //   (async function () {
    //     await getLongAndLat()
    //  })();
    // }
    // const locateButtonFetch = async () => {
    //   try {
    //     let position = await getLongAndLat(),
    //       { coords } = position;
    //     console.log(coords);
    //     dispatch(getWeatherLocation(coords))
    //     dispatch(getFiveLocation(coords))
    //     localStorage.removeItem('city')
    //   } catch (e) {
    //     console.log('Error: ' + e.message);
        if (ville) {
          dispatch(getWeatherToday(ville))
          dispatch(getFiveDays(ville))
        } else {
          dispatch(getWeatherToday("Le Mans"))
          dispatch(getFiveDays("Le Mans"))
        }
    // }
    // locateButtonFetch()

  }, [dispatch, isError, message, ville])

  const search = async (searchValue) => {
    if (!searchValue) {
      return ErrorNotif("input is empty")
    }
    if (!ville || searchValue.toLowerCase() !== today.name.toLowerCase()) {
      dispatch(getWeatherToday(searchValue))
      dispatch(getFiveDays(searchValue))
      localStorage.setItem('city', searchValue)
    } else {
      return ErrorNotif("no repeat")
    }
  }

  if (isLoading || !today || !today.main) {
    return <div>HELLO</div>
  }

  // https://openweathermap.org/current
  return (
    <main className={cb("main", "container")}>
      <ToastContainer />
      <ToggleTheme />
      <Search search={search} />
      <h1 className="h1">{today.name}</h1>
      <h2 className="h2">{today.main.temp}</h2>

      <AnimationMeteo weather={today} />

      <div className="details">
        <LonLat weather={today} />
        <Wind weather={today} />
      </div>
      <h3 className="h3">Les Jours Suivants</h3>
      <SeptDay />
    </main>
  )
} 
