import axios from "axios";


const getFiveDays = async(ville) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_API}&q=${ville}&units=metric`)
    return response.data
}

const getFiveLocation = async (location) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${process.env.REACT_APP_API}`)
    return response.data
}

const fiveDaysService = {
    getFiveDays,
    getFiveLocation
}

export default fiveDaysService