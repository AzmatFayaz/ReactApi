import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import './index.css'
import Weather from './WeatherApp'
import Header from './components/Header'
import Zomato from './ZomatoApp'
import registerServiceWorker from './registerServiceWorker'
import Dashboard from './components/Dashboard'

const routes = (
  <BrowserRouter >
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/weather' component={Weather} />
        <Route path='/zomato' component={Zomato} />
      </Switch>
    </div>
  </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('root'))
registerServiceWorker()
