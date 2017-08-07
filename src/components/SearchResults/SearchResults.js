import React, { Component } from 'react'
import './SearchResults.css'
import { connect } from 'react-redux'



function SingleResult({name,main}){
  return(
    <li className="search-result">
      <p> City Name:{name} </p>
      <p> City Temp:{main.temp} </p>
      <p> City Humidity:{main.humidity} </p>
      <p> City Pressure:{main.pressure} </p>
    </li>
  )
}


export class SearchResults extends Component {

  render(){
    const weather = this.props.weather
    console.log(weather)
    return(
      <div>
        {weather.length !== 0 ?
          weather.map((singleCity,index) => <SingleResult key={index} name={singleCity.name} main={singleCity.main}/>)
          :
          <p> ... </p>
        }
      </div>
    )
  }
}


function mapStateToProps(state){
  return {weather: state.weather}
}

export default connect(mapStateToProps)(SearchResults)
