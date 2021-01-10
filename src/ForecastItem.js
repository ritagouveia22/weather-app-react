import React from "react";

import "./ForecastItem.css"

export default function ForecastItem(props) {
  let date = new Date(props.data.dt * 1000)
    let daysOfWeek = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ]
    let dayOfWeek = daysOfWeek[date.getDay()]
    let iconCode = props.data.weather[0].icon
    let iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
    let description = props.data.weather[0].description
    let maxtemp = Math.round(props.data.temp.max)
    let mintemp = Math.round(props.data.temp.min)

    return (
        <div className="ForecastItem col">
          {dayOfWeek}
          <img src={iconUrl} alt={description} className="forecastIcon"/>
          <strong>{maxtemp}ºC</strong> | {mintemp}ºC
        </div>
    )
}