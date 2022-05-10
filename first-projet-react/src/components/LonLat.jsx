import React from 'react'

export default function LonLat({weather}) {
  return (
    <div className="position">
    <p><strong>lon</strong>: {weather.coord && weather.coord.lon}</p>
    <p><strong>lat</strong>: {weather.coord && weather.coord.lat}</p>
    </div>
  )
}
