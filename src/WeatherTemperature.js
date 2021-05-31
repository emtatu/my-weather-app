import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }
    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature ">
                <span className="degrees">{Math.round(props.celsius)}</span>
                <span className="temp-unit float-right">°C | <a href="/" className="color-fahrenheit" onClick={showFahrenheit}> °F</a> </span>
            </div>
        );
    }

    else {
        let fahrenheit = (props.celsius * 9 / 5) + 32;
        return (
            <div className="WeatherTemperature">
                <span className="degrees">{Math.round(fahrenheit)}</span>
                <span className="temp-unit float-right" ><a href="/" className="color-celsius" onClick={showCelsius}>°C</a> |  °F </span>
            </div >
        )
    }
}