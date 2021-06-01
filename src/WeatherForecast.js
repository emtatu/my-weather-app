import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';

export default function WeatherForecast(props) {
    return (
        <div className="weatherForecast" >
            <div className="row">
                <div className="col">
                    <div className="weatherForcast-day">Thu</div>
                    <WeatherIcon code="01d" size={24} />
                    <div className="weatherForecast-temperature">
                        <span className="weatherForecast-temp-max">19°</span>
                        <span className="weatherForecast-temp-min">17°</span>
                    </div>
                </div>
            </div>
        </div>

    )
}