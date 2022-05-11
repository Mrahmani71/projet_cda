import React from 'react'

export default function LonLat({weather}) {
  return (
    <div>
    <h4 className='h4'>Location</h4>
    <div className="position">
    <p className='p'><strong>lon</strong>: {weather.coord && weather.coord.lon}</p>
    <p className='p'><strong>lat</strong>: {weather.coord && weather.coord.lat}</p>
    </div>
    </div>
  )
}
