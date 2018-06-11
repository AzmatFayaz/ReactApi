import React from 'react'

const ZomatoForm = props => (
  <div>
    <form onSubmit={props.getRestraunt}>
      <input type='text' name='city' placeholder='City....' />
      <input type='text' name='country' placeholder='Country....' />
      <button>Get Restaurant</button>
    </form>
  </div>
)

export default ZomatoForm
