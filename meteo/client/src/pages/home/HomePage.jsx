
// Modules
import { useEffect } from "react"
import cb from "classnames"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Search from "../../components/search/Search"
import AnimationMeteo from "../../components/meteo-animation/AnimationMeteo"
import LonLat from "../../components/lon-lat/LonLat"
import CinqDays from "../../components/days/Days"
import Wind from "../../components/wind/Wind"
import ErrorNotif from "../../components/notifications/ErrorNotif"

// redux
import { useDispatch, useSelector } from "react-redux";
import { getWeatherToday } from "../../featurs/today/todaySlice";


// Styles
import "../../assets/styles/main.css"
import { getFiveDays } from "../../featurs/fiveDay/fiveDaySlice";

export default function HomePage() {
  const ville = localStorage.getItem("city")
  const dispatch = useDispatch()
  const { today, isLoading, isError, message } = useSelector(
    (state) => state.today
  )
  const {fiveDay} = useSelector((state) => state.fiveDay)

  // function getLongAndLat() {
  //   return new Promise((resolve, reject) =>
  //     navigator.geolocation.getCurrentPosition(resolve, reject)
  //   );
  // }

  useEffect(() => {

    if (isError) {
      return ErrorNotif(message)
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
    //   }
    // }
    // locateButtonFetch()
  }, [dispatch, isError, message, ville])

  const search = async (searchValue) => {
    const regex = /^[a-zA-Z]*$/;
    const found = searchValue.match(regex);

    if (!searchValue) {
      return ErrorNotif("input is empty")
    }

    if (found) {
      if (!ville || searchValue.toLowerCase() !== today.name.toLowerCase()) {
        dispatch(getFiveDays(searchValue))
        dispatch(getWeatherToday(searchValue))
        localStorage.setItem('city', searchValue)
      } else {
        return ErrorNotif("no repeat")
      }
    }
    else {
      return ErrorNotif("Just a-z ou A-Z")
    }
  }

  if (isLoading || !today || !today.main || !fiveDay.list || fiveDay["list"].length === 0 ) {
    return <div>HELLO</div>
  }
  // https://openweathermap.org/current
  return (
    <main className={cb("main", "container")}>
      <ToastContainer />
      <Search search={search} />
      <h1 className="h1">{today.name}</h1>
      <h2 className="h2">{today.main.temp}</h2>

      <AnimationMeteo weather={today} />

      <div className="details">
        <LonLat weather={today} />
        <Wind weather={today} />
      </div>
      <h3 className="h3">Les Jours Suivants</h3>
      <CinqDays />
    </main>
  )
} 
