import React from 'react'

const ZomatoForm = props => (
  <div>
    <form onSubmit={props.getRestraunt}>
      <input type='text' name='city' placeholder='City....' />
      <input type='text' name='country' placeholder='Country....' />
      <button>Get Restauraunt</button>
    </form>
  </div>
)

export default ZomatoForm
