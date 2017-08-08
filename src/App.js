import React, { Component } from 'react';
// import logo from './logo.svg';
import './normalize.css'
import './App.css';

// Components
import {Header} from './components/Header'
import {Main} from './components/Main'
import {Footer} from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

  // <img src={logo} className="App-logo" alt="logo" />
