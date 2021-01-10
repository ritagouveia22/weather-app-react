import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails"
import WeatherForecast from "./WeatherForecast"

import axios from "axios";

import "./Weather.css"

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready:false})
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
  setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    temperature: Math.round(response.data.main.temp),
    iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed),
    sunrise: new Date(response.data.sys.sunrise * 1000),
    sunset: new Date(response.data.sys.sunset * 1000),
    lon: response.data.coord.lon,
    lat: response.data.coord.lat

  })
}

function search() {
  const apiKey = "05d59b97163becec12a0f8000856ca3e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit (event) {
  event.preventDefault();
  search()
}

function handleCityChange(event) {
  setCity(event.target.value)

}

if (weatherData.ready) {
return(
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoComplete="off"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-secondary btn-block w-100"
            />
          </div>
        </div>
      </form>
      <WeatherDetails data={weatherData}/>
      <WeatherForecast city={weatherData.city} lon={weatherData.lon} lat={weatherData.lat} />
    </div>
  )
} else {
  search();
  return "Loading..."
}

  
    
}