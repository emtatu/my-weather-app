import React from 'react';
import FormattedDate from './FormattedDate'
import WeatherIcon from './WeatherIcon'
export default function WeatherInfo(props) {
    return (


        <div class="weatherInfo   ">
            <div className="App-body ">

                <div className="row">
                    <div className="col-4 text-start ">
                        <ul className="mt-3 pt-4">

                            <li>Humidity: {props.data.humidity} %</li>
                            <li>Wind: {props.data.wind}km/h</li>
                            <li>Pressure: {props.data.pressure}/ph</li>
                        </ul>
                    </div>
                    <div className="col-5 text-start">
                        <h3 className="geo-location text-center">{props.data.city}</h3>
                        <ul className="mt-2 pt-1">
                            <li>
                                < FormattedDate date={props.data.date} />
                            </li>

                            <li className="text-capitalize"> {props.data.description} </li>

                        </ul>
                        <div class="clearfix">
                            <div class="float">
                                <WeatherIcon code={props.data.icon} title={props.data.description} />

                            </div>

                            <div className="degrees-content">
                                <span className="degrees">{Math.round(props.data.temperature)}</span>
                                <p className="temp-unit">°C | °F</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-3 text-start mt-3 pt-3">
                        <ul>
                            <li> Max: {Math.round(props.data.maxTemperature)}°C </li>
                            <li> Min: {Math.round(props.data.minTemperature)}°C</li>
                        </ul>
                    </div>




                </div>
                <div className="future-predictions" >
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li>
                                    14:00
                                </li>

                                <li>img</li>
                                <li>
                                    15°C
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div >
        </div >



    );





}