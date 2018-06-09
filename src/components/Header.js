import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <nav class='navbar navbar-default'>
    <div class='container-fluid'>
      <ul class='nav navbar-nav'>
        <li><NavLink to='/' activeClassName='is-active' exact>Dashboard</NavLink></li>
        <li> <NavLink to='/weather' activeClassName='is-active'>Weather API</NavLink></li>
        <li><NavLink to='/zomato' activeClassName='is-active'>Zomato API</NavLink></li>
      </ul>
    </div>
  </nav>
)

export default Header
