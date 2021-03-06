import React from 'react';
import FormattedDate from './FormattedDate'
import WeatherIcon from './WeatherIcon'
import WeatherTemperature from './WeatherTemperature';
export default function WeatherInfo(props) {
    return (


        <div className="weatherInfo   ">
            <div className="App-body ">

                <div className="row weather-container">
                    <div className="col-md-4 col-sm-12 geo-location text-center ">
                        <ul className="mt-3 pt-4">

                            <li>Humidity: {props.data.humidity} %</li>
                            <li>Wind: {props.data.wind}km/h</li>
                            <li>Pressure: {props.data.pressure}/ph</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12 cityname geo-location text-center">
                        <h3 >{props.data.city}</h3>
                        <ul className="mt-2 pt-1">
                            <li>
                                < FormattedDate date={props.data.date} />
                            </li>

                            <li className="text-capitalize"> {props.data.description} </li>

                        </ul>
                        <div className="clearfix">
                            <div className="float">
                                <WeatherIcon code={props.data.icon} title={props.data.description} />

                            </div>

                            <div className="degrees-content">

                                <WeatherTemperature celsius={props.data.temperature} />

                            </div>
                        </div>

                    </div>

                    <div className="col-md-4 col-sm-12 geo-location text-center mt-3 pt-3">
                        <ul>
                            <li> Max: {Math.round(props.data.maxTemperature)}°C </li>
                            <li> Min: {Math.round(props.data.minTemperature)}°C</li>
                        </ul>
                    </div>

                </div>

            </div >
        </div >

    );





}