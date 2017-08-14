import React, { Component } from 'react'
import './Header.css'
import vid from './vid-bg.mp4'


export default class Header extends Component {

  render(){
    return(
      <header className="header">
        <nav className="navbar">
        <div className="navbar__wrapper">
          <a href="#" className="navbar__logo"> Sleep & Travel </a>
          <div className="nav">
            <ul>
              <li className="nav__item"><a href="/about" className="nav__link">search</a></li>
              <li className="nav__item"><a href="/about" className="nav__link">about</a></li>
              <li className="nav__item"><a href="/about" className="nav__link">contact</a></li>
              <li className="nav__item"><a href="/about" className="nav__link">help</a></li>
              <li className="nav__item"><a href="/about" className="nav__link">bookmarks</a></li>
            </ul>
          </div>
        </div>
        </nav>
        <div className="header__background">
          <video id="video-background" autoPlay loop >
            <source src={vid} type="video/mp4"/>
          </video>
          <div className="search-form">
            <div className="search-form__wrapper">
            <div className="search-form__wrapper--inner">
              <h1 className="search-form__heading"> <span>Find one night </span>- last minute deals </h1>
              <div className="search-form__container">
              <div className="search-form__container--wrapper">
                <form className="search-form__search">
                  <div>
                    <label> Tell us your location </label>
                    <input className="search-form__search-place" placeholder="Room, Paris, Moon" />
                  </div>
                </form>
                <form className="search-form__search">
                  <div>
                    <label> Adults </label>
                    <select className="search-form__search-time">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </form>
                <form className="search-form__search">
                  <div className="second">
                    <label> Distance </label>
                    <select className="search-form__search-time">
                      <option value="1"> &lt; 5 km</option>
                      <option value="2"> 5 - 10 km</option>
                      <option value="3"> 10 km &gt;</option>
                    </select>
                  </div>
                </form>
                <button className="search-form__button"> Search </button>
              </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </header>
    )
  }
}
