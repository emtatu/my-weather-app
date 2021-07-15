import React, { useState, useEffect } from 'react';

import WeatherForecastDay from './WeatherForecastDay';
import './WeatherForecast.css';
import axios from 'axios';


export default function WeatherForecast(props) {


    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);

    }, [props.coordinates])






    function handleResponse(response) {

        setForecast(response.data.daily);
        setLoaded(true);

    }




    if (loaded) {

        return (
            <div className="weatherForecast" >
                <div className="row">

                    <div className="col" >
                        <WeatherForecastDay data={forecast[0]} />
                    </div>

                    <div className="col" >
                        <WeatherForecastDay data={forecast[1]} />
                    </div>

                    <div className="col" >
                        <WeatherForecastDay data={forecast[2]} />
                    </div>




                </div>
            </div>

        )


    } else {

        let apiKey = "81e9ca7b6afb78d66e95e98ae74c78a3"
        let laitude = props.coordinates.lon;
        let longitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${laitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);

        return null
    }

}