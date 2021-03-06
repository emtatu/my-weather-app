import React, { useState } from 'react'
import axios from "axios"

import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';
import Button from 'react-bootstrap/Button';
import { Form, FormControl } from 'react-bootstrap';
//import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';



export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({

            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            pressure: response.data.main.pressure,
            city: response.data.name,

            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            maxTemperature: response.data.main.temp_max,
            minTemperature: response.data.main.temp_min

        })

    }
    function search() {
        const apiKey = "81e9ca7b6afb78d66e95e98ae74c78a3";

        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather-app ">
                <Form onSubmit={handleSubmit} inline className="Form" >


                    <div className="row input-container" >
                        <div className="col-8"  >
                            <FormControl type="text" placeholder="Search for a city.." className=" form-control mr-sm-2 input-lenght" autoFocus="on" onChange={handleCityChange} />
                        </div>
                        <div className="col-4" >
                            <Button type="submit" className="submit-button text-end  btn-color">Submit</Button>
                        </div>

                    </div>
                </Form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div >
        );
    } else {
        search();

        return "Loading.."

    }


}