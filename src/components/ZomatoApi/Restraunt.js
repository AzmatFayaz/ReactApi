import React from 'react'

const Restraunt = props => (
  <div className='weather__info'>
    {props.restrauntName && props.restrauntName.arr.map((prop, index) => {
      return <span className='weather__value' key={index}><p key={index}className='weather__key'>{ prop.name}</p></span>
    })}
    {
     props.error && <p className='weather__error'>Condition:
      <span> {props.error}</span>
     </p>
    }

  </div>

)

export default Restraunt
