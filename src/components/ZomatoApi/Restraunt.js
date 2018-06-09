import React from 'react'

const Weather = props => (
  <div className='weather__info'>
    {
      props.cityName && <p className='weather__key'>City:
      <span className='weather__value'> {props.cityName}</span>
      </p>
    }
  </div>
)

export default Weather
