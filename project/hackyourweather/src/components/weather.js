import CityWeatherData from "../city-weather.json";

function WeatherData() {
    return CityWeatherData.map(({ name, sys, main, coord, weather }, index) => {
        return (
            <div className='City-weather' key={index}>
                <h2>
                    {name}, {sys.country}
                </h2>
                <div className='Weather-desc'>
                    <p style={{ fontWeight: "bold" , fontSize: "20px" }}>{weather[0].main}</p>
                    <p>{weather[0].description}</p>
                </div>
                <div className='max-min-temp'>
                    <p>
                        Min temp: <span>{main.temp_min}</span>
                    </p>
                    <p>
                        Max temp: <span>{main.temp_max}</span>
                    </p>
                    <p>
                        Location:{" "}
                        <span>
                            {coord.lon} , {coord.lat}
                        </span>
                    </p>
                </div>
            </div>
        );
    });
}

export function CitiesWeather() {
    return (
        <div className='CityWeather'>
            {" "}
            <WeatherData />{" "}
        </div>
    );
}
