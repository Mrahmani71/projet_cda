import axios from "axios";


const getFiveDays = async(ville) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=${import.meta.env.VITE_API}&q=${ville}&units=metric`)
    return response.data
}

const getFiveLocation = async (location) => {
    const loc = JSON.parse(location)
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${loc.lat}&lon=${loc.lon}&units=metric&appid=${import.meta.env.VITE_API}`)
    return response.data
}

const fiveDaysService = {
    getFiveDays,
    getFiveLocation
}

export default fiveDaysService