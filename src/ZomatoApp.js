import React from 'react'
import Titles from './components/ZomatoApi/Titles'
import Form from './components/ZomatoApi/ZomatoForm'
import Restraunt from './components/ZomatoApi/Restraunt'

// const API_KEY = 'f5b5bcf6f320233b29eb28025c3b08a7'

class ZomatoApp extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getRestraunt = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`https://developers.zomato.com/api/v2.1/cities?q=${city}`,{
      headers:{'user-key': '227639c762cafc3173b93a5052288de5'}
    })
    console.log('cALL MADE')
    const data = await api_call.json()
    if (city && country) {
      console.log(data)
      this.setState({
        cityName: data['location_suggestions'][0].name
        // city: data.name,
        // country: data.sys.country,
        // humidity: data.main.humidity,
        // description: data.weather[0].description,
        // error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter The values"
      })
    }
  }
  render() {
    return <div >
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container-zomato">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
              <Form getRestraunt={this.getRestraunt} />
              <Restraunt
              cityName={this.state.cityName}
                // city={this.state.city}
                // country={this.state.country}
                // humidity={this.state.humidity}
                // description={this.state.description}
                // error={this.state.error}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

 
export default ZomatoApp
