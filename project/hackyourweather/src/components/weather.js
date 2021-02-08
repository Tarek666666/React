export function WeatherData({ citiesWeather, handleDelete }) {
    return (
        <div className='Cities-Container'>
            {citiesWeather.map((city, index) => {
                return (
                    <div key={index + 1} id={index} className='City-weather'>
                        <button
                            id={index}
                            className={"delete-btn"}
                            onClick={() => handleDelete(city.id)}
                        >
                            X
                        </button>
                        <h2>
                            {city.name}, {city.sys}
                        </h2>

                        <p>
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
                            <span>Location: </span> lat: {city.lat} , lon: {city.lon}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
