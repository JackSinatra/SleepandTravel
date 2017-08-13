import React, { Component } from 'react'
import './Main.css'
import offer1 from './offer_1.jpg'
import reviews from './reviews_icon.png'
import room1 from './room_1.jpg'
import room2 from './room_2.jpg'
import room3 from './room_3.jpg'
import room4 from './room_4.jpg'
import room5 from './room_5.jpg'

export default class Main extends Component {

  render(){
    return(
      <main className="main">
        <div className="main__wrapper">
          <div className="offers">
            <div className="offers__heading">Available rooms today for your current location:</div>
              <div className="offers__box">
                <img className="offers__box-image" src={room5} />
                <div className="offers__box-details">
                  <h2 className="offers__box-details__name"> Hostel Arcadia </h2>
                  <p className="offers__box-details__price"> 45 EUR </p>
                </div>
                <div className="offers__box-details">
                  <h2 className="offers__box-details__reviews">
                    <img src={reviews} />
                  </h2>
                  <p className="offers__box-details__utilities"> 5-10km / 3 beds </p>
                </div>
              </div>
              <div className="offers__box">
                <img className="offers__box-image" src={room5} />
                <div className="offers__box-details">
                  <h2 className="offers__box-details__name"> Hostel Arcadia </h2>
                  <p className="offers__box-details__price"> 45 EUR </p>
                </div>
                <div className="offers__box-details">
                  <h2 className="offers__box-details__reviews">
                    <img src={reviews} />
                  </h2>
                  <p className="offers__box-details__utilities"> 5-10km / 3 beds </p>
                </div>
              </div>
              <div className="offers__box">
                <img className="offers__box-image" src={room5} />
                <div className="offers__box-details">
                  <h2 className="offers__box-details__name"> Hostel Arcadia </h2>
                  <p className="offers__box-details__price"> 45 EUR </p>
                </div>
                <div className="offers__box-details">
                  <h2 className="offers__box-details__reviews">
                    <img src={reviews} />
                  </h2>
                  <p className="offers__box-details__utilities"> 5-10km / 3 beds </p>
                </div>
              </div>
              <div className="offers__box">
                <img className="offers__box-image" src={room5} />
                <div className="offers__box-details">
                  <h2 className="offers__box-details__name"> Hostel Arcadia </h2>
                  <p className="offers__box-details__price"> 45 EUR </p>
                </div>
                <div className="offers__box-details">
                  <h2 className="offers__box-details__reviews">
                    <img src={reviews} />
                  </h2>
                  <p className="offers__box-details__utilities"> 5-10km / 3 beds </p>
                </div>
              </div>
              <div className="offers__box">
                <img className="offers__box-image" src={room5} />
                <div className="offers__box-details">
                  <h2 className="offers__box-details__name"> Hostel Arcadia </h2>
                  <p className="offers__box-details__price"> 45 EUR </p>
                </div>
                <div className="offers__box-details">
                  <h2 className="offers__box-details__reviews">
                    <img src={reviews} />
                  </h2>
                  <p className="offers__box-details__utilities"> 5-10km / 3 beds </p>
                </div>
              </div>
              <div className="offers__box">
                <img className="offers__box-image" src={room5} />
                <div className="offers__box-details">
                  <h2 className="offers__box-details__name"> Hostel Arcadia </h2>
                  <p className="offers__box-details__price"> 45 EUR </p>
                </div>
                <div className="offers__box-details">
                  <h2 className="offers__box-details__reviews">
                    <img src={reviews} />
                  </h2>
                  <p className="offers__box-details__utilities"> 5-10km / 3 beds </p>
                </div>
              </div>
              <div className="offers__box">
                <img className="offers__box-image" src={room5} />
                <div className="offers__box-details">
                  <h2 className="offers__box-details__name"> Hostel Arcadia </h2>
                  <p className="offers__box-details__price"> 45 EUR </p>
                </div>
                <div className="offers__box-details">
                  <h2 className="offers__box-details__reviews">
                    <img src={reviews} />
                  </h2>
                  <p className="offers__box-details__utilities"> 5-10km / 3 beds </p>
                </div>
              </div>
              <div className="offers__box">
                <img className="offers__box-image" src={room5} />
                <div className="offers__box-details">
                  <h2 className="offers__box-details__name"> Hostel Arcadia </h2>
                  <p className="offers__box-details__price"> 45 EUR </p>
                </div>
                <div className="offers__box-details">
                  <h2 className="offers__box-details__reviews">
                    <img src={reviews} />
                  </h2>
                  <p className="offers__box-details__utilities"> 5-10km / 3 beds </p>
                </div>
              </div>
              <div className="offers__box">
                <img className="offers__box-image" src={room5} />
                <div className="offers__box-details">
                  <h2 className="offers__box-details__name"> Hostel Arcadia </h2>
                  <p className="offers__box-details__price"> 45 EUR </p>
                </div>
                <div className="offers__box-details">
                  <h2 className="offers__box-details__reviews">
                    <img src={reviews} />
                  </h2>
                  <p className="offers__box-details__utilities"> 5-10km / 3 beds </p>
                </div>
              </div>
          </div>
        </div>
      </main>
    )
  }
}
