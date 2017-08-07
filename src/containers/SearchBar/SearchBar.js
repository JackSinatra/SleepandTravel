import React, { Component } from 'react'
import './SearchBar.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../../actions/fetch_weather'


export class SearchBar extends Component {

  constructor(props) {
   super(props);
   this.state = {term:''};
 }

 onInputChange(e){
   this.setState({term:e.target.value})
 }

onFormSubmit(e){
  e.preventDefault()
  this.props.fetchWeather(this.state.term)
}

  render(){
    return(
      <form onSubmit={this.onFormSubmit.bind(this)} className="search-bar">
        <input onChange={this.onInputChange.bind(this)} value={this.state.term}  className="search-bar__input" />
        <button type="submit"> submit </button>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch)
}

export default connect (null,mapDispatchToProps)(SearchBar)
