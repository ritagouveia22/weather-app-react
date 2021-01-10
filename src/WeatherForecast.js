import React, { useState } from "react";
import ForecastItem from "./ForecastItem"

import axios from "axios";

import "./WeatherForecast.css"

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false)
  const [forecast, setForecast] = useState(null)

  function handleForecastResponse(response) {
    setForecast(response.data)
    setLoaded(true)
  }

  if(loaded && props.lat === forecast.lat) {
    return (
      <div className="WeatherForecast row">
        <ForecastItem data={forecast.daily[0]}/>
        <ForecastItem data={forecast.daily[1]}/>
        <ForecastItem data={forecast.daily[2]}/>
        <ForecastItem data={forecast.daily[3]}/>
        <ForecastItem data={forecast.daily[4]}/>
        <ForecastItem data={forecast.daily[5]}/>
      </div>
    )

  } else {
      let apiKey = "05d59b97163becec12a0f8000856ca3e";
      let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alert&appid=${apiKey}&units=metric`

      axios.get(url).then(handleForecastResponse)
      
      return(null)
    }
  }