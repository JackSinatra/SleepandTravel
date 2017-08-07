import React, { Component } from 'react';
// import logo from './logo.svg';
import './normalize.css'
import './App.css';

// Components
import {SearchBar} from './containers/SearchBar'
import {SearchResults} from './components/SearchResults'

class App extends Component {
  render() {
    return (
      <div className="app">
      <SearchBar />
      <SearchResults />
      </div>
    );
  }
}

export default App;

  // <img src={logo} className="App-logo" alt="logo" />
