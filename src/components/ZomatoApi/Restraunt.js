import React from 'react'

const Restraunt = props => (
  <div className='weather__info'>
    {
      props.restrauntName && <p className='weather__key'>Restraunt:
      <span className='weather__value'> {props.restrauntName}</span>
      </p>
    }
    {
      props.error && <p className='weather__error'>Condition:
      <span> {props.error}</span>
      </p>
    }
  </div>
)

export default Restraunt
