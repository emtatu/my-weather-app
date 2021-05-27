import React, { useState } from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button';
import { Form, FormControl } from 'react-bootstrap';
//import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';



export default function Weather() {

    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data)
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            pressure: response.data.main.pressure,
            city: response.data.name,
            date: "Wednesday, 14:56",
            description: response.data.weather[0].description,
            iconUrl: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
            maxTemperature: response.data.main.temp_max,
            minTemperature: response.data.main.temp_min

        })

    }
    if (weatherData.ready) {
        return (
            <div className="Weather-app">
                <Form inline className="Form" >


                    <div className="row input-container" >
                        <div className="col-8"  >
                            <FormControl type="text" placeholder="Add your city" className=" mr-sm-2 input-lenght" />
                        </div>
                        <div className="col-2" >
                            <Button type="submit" className="submit-button" >Submit</Button>
                        </div>
                        <div className="col-2" >
                            <Button type="submit" className="location-button" >Location</Button>
                        </div>
                    </div>
                </Form>
                <div className="App-body ">
                    <div className="row">
                        <div className="col-4 text-start ">
                            <ul className="mt-3 pt-4">

                                <li>Humidity: {weatherData.humidity} %</li>
                                <li>Wind: {weatherData.wind}km/h</li>
                                <li>Pressure: {weatherData.pressure}/ph</li>
                            </ul>
                        </div>
                        <div className="col-5 text-start">
                            <h3 className="geo-location text-center">{weatherData.city}</h3>
                            <ul className="mt-2 pt-1">
                                <li> {weatherData.date} </li>

                                <li className="text-capitalize"> {weatherData.description} </li>

                            </ul>
                            <img src={weatherData.iconUrl} alt={weatherData.description} title={weatherData.description}></img>
                            <div className="degrees-content">
                                <span className="degrees">{Math.round(weatherData.temperature)}</span>
                                <p className="temp-unit">°C | °F</p>
                            </div>

                        </div>

                        <div className="col-3 text-start mt-3 pt-3">
                            <ul>
                                <li> Max: {Math.round(weatherData.maxTemperature)}°C </li>
                                <li> Min: {Math.round(weatherData.minTemperature)}°C</li>
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


            </div>
        )
    } else {
        const apiKey = "81e9ca7b6afb78d66e95e98ae74c78a3";
        let city = "Brussels";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        //const data = { data: { "coord": { "lon": 4.3488, "lat": 50.8504 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d" }], "base": "stations", "main": { "temp": 286.86, "feels_like": 286.01, "temp_min": 284.91, "temp_max": 288.07, "pressure": 1012, "humidity": 66, "sea_level": 1012, "grnd_level": 1009 }, "visibility": 10000, "wind": { "speed": 7.77, "deg": 279, "gust": 10.03 }, "clouds": { "all": 40 }, "dt": 1622029122, "sys": { "type": 1, "id": 1227, "country": "BE", "sunrise": 1622000389, "sunset": 1622057990 }, "timezone": 7200, "id": 2800866, "name": "Brussels", "cod": 200 } }
        //handleResponse(response.data.main)
        return "loading"

    }


}