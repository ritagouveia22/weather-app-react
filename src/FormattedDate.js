import React from "react";

export default function FormattedDate(props) {
    let daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]
    let months =[
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]
    let dayOfWeek = daysOfWeek[props.date.getDay()]
    let month = months[props.date.getMonth()]
    let day = props.date.getDate()
    let hours = props.date.getHours()
    if (hours < 10) {
        hours = `0${hours}`
    }
    let minutes = props.date.getMinutes()
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return <div>Last updated at: {dayOfWeek} {month} {day}, {hours}h{minutes}
        </div>
}