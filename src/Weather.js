import React from "react";

import "./Weather.css"

export default function Weather() {
    return(
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input type="search" placeholder="Enter a city..." className="form-control" autoComplete="off"/>
          </div>
          <div className="col-4">
            <input type="submit" value="Search" className="btn btn-secondary btn-block w-100"/>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <h1>Lisbon</h1>
          <p>Last updated at: Thursday Jan 7, 22:00</p>
        </div>
        <div className="col-6">
          <p><span className="temperature">7</span> <span className="units">ºC | ºF</span></p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <img src="https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/HEAD/dist/icons/black/png/256x256/tstorms.png" alt="Clear Sky"/>
        </div>
        <div className="col-6">
          <ul>
           <li>"Clear Sky"</li>
           <li>Humidity: 70%</li>
           <li>Wind: 5 km/h</li>
           <li>Sunrise: 07:54</li>
           <li>Sunset: 17:30</li>
          </ul>
        </div>
      </div>
    </div>
  )
}