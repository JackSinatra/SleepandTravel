import React, { Component } from 'react'
import './Footer.css'
import fb from './fb-logo-grey.png'
import twt from './twitter-logo-grey.png'

export default class Footer extends Component {

  render(){
    return(
      <footer className="footer">
        <div className="footer-menu">
          <div className="footer-menu__wrapper">
            <li className="footer-menu__item"><a href="#">Support</a></li>
            <li className="footer-menu__item"><a href="#">Jobs</a></li>
            <li className="footer-menu__item"><a href="#">Privacy Policy</a></li>
            <li className="footer-menu__item"><a href="#">About</a></li>
            <li className="footer-menu__item"><a href="#">Contact</a></li>
          </div>
          <div className="footer-social">
            <a href="#"><img className="footer-social__icon" src={fb} /></a>
            <a href="#"><img className="footer-social__icon" src={twt} /></a>
          </div>
         </div>
      </footer>
    )
  }
}
