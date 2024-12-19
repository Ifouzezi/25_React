import React from "react";
import "./styles.css";
import SearchBar from "./searchBar";
import Weather from "./weather";

const Weatherapp = () => {
    return (
        <div className="wa_container">
            <h1>Weather App</h1>
            <div className="weather-app">
                <Weather/>
            </div>
        </div>
    );
};

export default Weatherapp;
