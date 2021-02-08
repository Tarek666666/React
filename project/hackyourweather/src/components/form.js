import { useState } from "react";
import "../App.css";
import { WeatherData } from "../components/weather";
import { Search } from "./search";

export default function From() {
    const [cityName, setCityName] = useState("");
    const [citiesWeather, setCitiesWeather] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [searchError, setSearchError] = useState(false);
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

    const handleCityName = (e) => {
        setCityName(e.target.value);
    };

    const handleDelete = (id) => {
        const filterdCities = citiesWeather.filter((city) => city.id !== id);
        setCitiesWeather(filterdCities);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        setSearchError(false);

        if (!cityName) {
            setSearchError(true);

            return;
        }

        setIsLoading(true);

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
        )
            .then((response) => {
                if (!response.ok) {
                    setIsLoading(false);
                    setError(true);
                    throw new Error("Something went wrong with fetching data");
                }
                return response.json();
            })
            .then((data) => {
                setIsLoading(false);
                setSearchError(false);
                setError(false);

                const searchedCityObj = {
                    name: data.name,
                    sys: data.sys.country,
                    temp: data.main.temp,
                    maxTemp: data.main.temp_max,
                    minTemp: data.main.temp_min,
                    id: data.id,
                    description: data.weather[0].description,
                    weather: data.weather[0].main,
                    lon: data.coord.lon,
                    lat: data.coord.lat,
                };

                setCitiesWeather([searchedCityObj, ...citiesWeather]);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(true);
            });
    };

    return (
        <div>
            <form className='form' onSubmit={handleSearch}>
                <Search handleCityName={handleCityName} cityName={cityName} />
            </form>
            {hasError && !isLoading && !searchError && (
                <>
                    <p className={"search-error"}>Please Enter a Valid City Name .</p>
                    <WeatherData citiesWeather={citiesWeather} handleDelete={handleDelete} />
                </>
            )}
            {searchError && (
                <>
                    <p className={"search-error"}>You can't leave the search bar empty</p>{" "}
                    <WeatherData citiesWeather={citiesWeather} handleDelete={handleDelete} />
                </>
            )}
            {isLoading && !hasError && <p>Loading .....</p>}
            {!citiesWeather && !hasError && !isLoading && !searchError && (
                <p className={"search-bar-empty"}>
                    You Have not entered a City name to search for it!!
                </p>
            )}

            {citiesWeather.length !== 0 && !isLoading && !hasError && !searchError && (
                <WeatherData citiesWeather={citiesWeather} handleDelete={handleDelete} />
            )}
        </div>
    );
}
