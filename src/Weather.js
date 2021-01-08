import React, { useState } from "react";
import axios from "axios";

import "./Weather.css"

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready:false})

function handleResponse(response) {
  setWeatherData({
    ready: true,
    city: response.data.name,
    date: "Thursday Jan 7, 22:00",
    temperature: Math.round(response.data.main.temp),
    iconUrl: "https://raw.githubusercontent.com/manifestinteractive/weather-underground-icons/HEAD/dist/icons/black/png/256x256/tstorms.png",
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed
  })
}

if (weatherData.ready) {
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
          <h1>{weatherData.city}</h1>
          <p>Last updated at: {weatherData.date}</p>
        </div>
        <div className="col-6">
          <p><span className="temperature">{weatherData.temperature}</span> <span className="units">ºC | ºF</span></p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <img src={weatherData.iconUrl} alt={weatherData.description}/>
        </div>
        <div className="col-6">
          <ul>
           <li className="text-capitalize">"{weatherData.description}"</li>
           <li>Humidity: {weatherData.humidity}%</li>
           <li>Wind: {weatherData.wind} km/h</li>
           <li>Sunrise: 07:54</li>
           <li>Sunset: 17:30</li>
          </ul>
        </div>
      </div>
    </div>
  )
} else {
  const apiKey = "05d59b97163becec12a0f8000856ca3e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse)

  return "Loading..."
}

  
    
}