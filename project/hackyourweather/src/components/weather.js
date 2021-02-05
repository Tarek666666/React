import { useEffect, useState } from "react";

export function WeatherData({ cityWeather }) {
    const [citiesWeather, setCitiesWeather] = useState(cityWeather);

    const handleDelete = (id) => {
        const selectedId = id.target.id;

        cityWeather.splice(selectedId, 1);

        setCitiesWeather(cityWeather);
    };

    return (
        <div className='Cities-Container'>
            {cityWeather.map((city, index) => {
                return (
                    <div key={index + 1} id={index} className='City-weather'>
                        <button id={index} className={"delete-btn"} onClick={handleDelete}>
                            X
                        </button>
                        <h2>
                            {city.name}, {city.sys}
                        </h2>

                        <p>
                            {" "}
                            <span>Weather:</span> {city.weather}
                        </p>
                        <p>
                            <span>Description:</span> {city.description}
                        </p>
                        <p>
                            <span>Temp: </span>
                            {city.temp}º
                        </p>
                        <p>
                            <span>Max_Temp: </span>
                            {city.maxTemp}º
                        </p>
                        <p>
                            <span>Min_Temp: </span>
                            {city.minTemp}º
                        </p>
                        <p>
                            <span>Location: </span> lat: {city.lat} , lon: {city.lon}{" "}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
