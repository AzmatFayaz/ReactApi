import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import './App.css'
import './index.css'
import App from './App'
import Titles from './components/Titles'
import Header from './components/Header'
import ZomatoForm from './components/ZomatoForm'
import registerServiceWorker from './registerServiceWorker'
import Dashboard from './components/Dashboard'

const routes = (
  <BrowserRouter >
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/weather' component={App} />
      </Switch>
    </div>
  </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('root'))
registerServiceWorker()
