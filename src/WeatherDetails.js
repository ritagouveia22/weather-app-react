import React from "react";
import FormattedDate from "./FormattedDate"
import Sunrise from "./Sunrise"
import Sunset from "./Sunset"

export default function WeatherDetails(props) {
    return (
    <div className="WeatherDetails">

    <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <div><FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col-6">
            <p><span className="temperature">{props.data.temperature}</span> <span className="units">ºC | ºF</span></p>
        </div>
    </div>
    <div className="row mt-3">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description}/>
        </div>
        <div className="col-6">
          <ul>
           <li className="text-capitalize"><i className="fas fa-angle-double-left"></i> {props.data.description} <i className="fas fa-angle-double-right"></i></li>
           <li>Humidity: {props.data.humidity}%</li>
           <li>Wind: {props.data.wind} km/h</li>
           <li><Sunrise sunrise={props.data.sunrise} /></li>
           <li><Sunset sunset={props.data.sunset} /></li>
          </ul>
        </div>
      </div>

    </div>
    )
}