import React from 'react'
import Titles from './components/ZomatoApi/Titles'
import Form from './components/ZomatoApi/ZomatoForm'
import Restraunt from './components/ZomatoApi/Restraunt'

const API_KEY = '227639c762cafc3173b93a5052288de5'

class ZomatoApp extends React.Component {
  state = {
    restrauntName: undefined,
    error: undefined
  }
  getRestraunt = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    const weather_call = await fetch(`https://developers.zomato.com/api/v2.1/cities?q=${city}`,
    {headers:{'user-key': API_KEY}})
    const weatherData = await weather_call.json()
console.log(weatherData)

if(weatherData.status === 'success' && weatherData['location_suggestions'].length > 0){
     const cityID = weatherData['location_suggestions'][0].id

    const googleApi_call = await fetch(`https://developers.zomato.com/api/v2.1/establishments?city_id=${cityID}`,
    {headers:{'user-key': API_KEY}})
    const restrauntData = await googleApi_call.json()
  
    if (city && country) {
      if(weatherData.status === 'success')
      {
        const arr =[]
        for (let i=0;i<3;i++){
          arr.push({'name': restrauntData.establishments[i].establishment.name})
        }
   
      this.setState({
        restrauntName: {arr},
        error:''
      })
    } else{
      this.setState({
        restrauntName: undefined,
        error: "No Restraunt found"
      })
    }
    } else {
      this.setState({
        restrauntName: undefined,
        error: "Please Enter The values"
      })
    }
  } else{
    this.setState({
      restrauntName: undefined,
      error: "City Not Available"
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
              restrauntName={this.state.restrauntName}
              error={this.state.error}
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
