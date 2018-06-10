import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <nav className='navbar navbar-default'>
    <div className='container-fluid'>
      <ul className='nav navbar-nav'>
        <li><NavLink to='/' activeClassName='is-active' exact>Dashboard</NavLink></li>
        <li> <NavLink to='/weather' activeClassName='is-active'>Weather</NavLink></li>
        <li><NavLink to='/restraunt' activeClassName='is-active'>Restraunt</NavLink></li>
      </ul>
    </div>
  </nav>
)

export default Header
