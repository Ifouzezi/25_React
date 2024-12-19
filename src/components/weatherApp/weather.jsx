import React, { useState } from "react";
import SearchBar from "./searchBar";

const Weather = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(param) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=46c845e4ac13681b21268f6d1e91b8fd`);
            const data = await response.json();
            console.log(data, 'data');
        } catch (e) {
            console.log(e);
        }
    }

    async function handleSearch() {
        fetchWeatherData(search);
    }

    return (
        <div className="">
            <SearchBar
                search={search}
                setSearch={setSearch} 
                handleSearch={handleSearch}
            />
        </div>
    );
};

export default Weather;
