import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar";

const Weather = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(param) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=46c845e4ac13681b21268f6d1e91b8fd`);
            const data = await response.json();
            console.log(data, 'data');
            if (data) {
                setWeatherData(data);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
        }
    }

    async function handleSearch() {
        fetchWeatherData(search);
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }


    useEffect(() => {
        fetchWeatherData('Lagos');
    }, []);

    return (
        <div className="">
            <SearchBar
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {
                loading ? <div>Loading...</div> :
                    <div className="weather-details">
                        <div className="city-name">
                            <h2>
                                {weatherData?.name},
                                <span>{weatherData?.sys?.country} </span>
                            </h2>
                        </div>
                        <div className="date">
                            <span>{getCurrentDate()}</span>
                        </div>
                        <div className="weather-info">
                            <span className="weather fs-20 ">
                                <h3>Wind</h3> {weatherData?.wind?.speed} m/s
                            </span>
                            <span className="temp fs-20 ">
                                <h3>Temperature</h3> {weatherData?.main?.temp}°C
                            </span>
                            <span className="humidity fs-20 ">
                                <h3>Humidity</h3> {weatherData?.main?.humidity}%
                            </span>
                        </div>

                        <div className="description">
                            <h3>Description</h3>
                            <p>
                            {weatherData?.name} is experiencing some {weatherData && weatherData.weather && weatherData.weather[0].description} today.
                            </p> 

                        </div>
                    </div>
            }
        </div>
    );
};

export default Weather;
