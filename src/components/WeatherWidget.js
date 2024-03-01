import React, { useState, useEffect } from 'react';

const APIKey = 'c155e15a7890a6bed1edd5d2e3c0dffc';

function WeatherWidget({ city = "Los Angeles" }) {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const getWeather = async () => {
            setError('');
            try {
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${APIKey}&units=imperial`;
                const response = await fetch(apiURL);
                const data = await response.json();
                if (data.cod !== 200) {
                    setError('City not found. Please try another city.');
                    setWeather(null);
                } else {
                    setWeather(data);
                }
            } catch (error) {
                setError('An error occurred while fetching the weather data.');
                console.log(error);
            }
        };

        getWeather();
    }, [city]);

    if (error) return <div>{error}</div>;
    if (!weather) return <div>{city ? "Loading..." : "Please enter a city"}</div>;

    const iconUrl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    const dateStr = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="max-w-lg rounded overflow-hidden shadow-lg p-4 bg-gray-800 text-white bg-opacity-50 w-[25rem] h-[25rem] flex flex-col items-center mt-8">
            <div className="flex justify-between w-full">
                <div>
                    <p className="text-sm mb-4">{dateStr}</p>
                    <h1 className="font-bold text-2xl mb-4">{weather.name}</h1>
                </div>
                <img className="w-12 h-12" src={iconUrl} alt="Weather icon" />
            </div>
            <div className="flex justify-center items-baseline mt-6">
                <span className="font-bold text-6xl">{Math.round(weather.main.temp)}</span>
                <span className="text-2xl">°F</span>
            </div>
            <p className="text-md mt-2 mb-16">{weather.weather[0].description}</p>
            <div className="flex justify-between items-center w-full mt-10">
                <div className="flex items-center">
                    <i className="fas fa-eye mr-2"></i>
                    <span>Visibility: {Math.round(weather.visibility / 1609)}mi</span>
                </div>
                <div className="flex items-center">
                    <i className="fas fa-thermometer-half mr-2"></i>
                    <span>Feels like {Math.round(weather.main.feels_like)}°F</span>
                </div>
            </div>
            <div className="flex justify-between items-center w-full mt-2">
                <div className="flex items-center">
                    <i className="fas fa-tint mr-2"></i>
                    <span>Humidity: {weather.main.humidity}%</span>
                </div>
                <div className="flex items-center">
                    <i className="fas fa-wind mr-2"></i>
                    <span>Wind: {(weather.wind.speed * 2.237).toFixed(2)} mph</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
