import React from 'react'

export default function Wind({weather}) {
  return (
    <div>
    <h4 className='h4'>Wind</h4>
    <div className="position">
    <p className='p'><strong>Speed</strong>: {weather.wind && weather.wind.speed}</p>
    </div>
    </div>
  )
}
