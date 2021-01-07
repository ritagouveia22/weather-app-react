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
        </div>
        <div className="col-6">
          <p>7 ºC | ºF</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Last updated at: Thursday Jan 7, 22:00</li>
            <li>"Clear Sky"</li>
          </ul>
          <img src="https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/HEAD/dist/icons/black/png/256x256/tstorms.png" alt="Clear Sky"/>
        </div>
        <div className="col-6">
          <ul>
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