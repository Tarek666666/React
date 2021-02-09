import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from "recharts";

export function City() {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const { cityId } = useParams();
    const [selectedCity, setSelectedCity] = useState([]);
    const [chartData, setChartData] = useState([]);

    const fetchSingleCity = () => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${API_KEY}`
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Something went wrong with fetching data");
                }

                return res.json();
            })
            .then((data) => {
                const selectedCityChart = { city: data.city, list: data.list };
                setupChart(selectedCityChart);
            })
            .catch((err) => console.log(err.message));
    };

    function setupChart(forecast) {
        setChartData(
            forecast.list.map((item) => {
                return {
                    name: item.dt_txt,
                    temp: item.main.temp,
                };
            })
        );
    }

    useEffect(() => {
        fetchSingleCity();
    }, []);

    return (
        <>
            <Link to='/'>
                <button>Back Home</button>
            </Link>

            <AreaChart
                width={800}
                height={300}
                data={chartData}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Area type='monotone' dataKey='temp' stroke='lightskyblue' />
                <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
            </AreaChart>
        </>
    );
}
