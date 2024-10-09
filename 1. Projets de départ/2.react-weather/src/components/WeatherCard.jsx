import { useState, useEffect } from "react";
import loaderSpinning from "../assets/loader.svg";
import browserError from "../assets/browser.svg";
import './WeatherCard.css';

const APIKey = import.meta.env.VITE_WEATHER_API_KEY;

export default function WeatherCard() {

  const [weatherData, setWeartherData] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {

    const fetchWeatherData = async() => {
      try {
        const response = await fetch(`https://api.airvisual.com/v2/nearest_city?key=${APIKey}`)
        if(!response.ok) throw new Error(`Error ${response.status}, ${response.statusText}`);
        const responseData = await response.json();
        setWeartherData(
          {
          city: responseData.data.city,
          state: responseData.data.state,
          temperature: responseData.data.current.weather.tp,
          iconId: responseData.data.current.weather.ic
          }
        );

      } catch (error) {
        setErrorInfo(error.message)
      }
    }

    fetchWeatherData()
  }, [])


  return (
    <main className="card-container">
      {(errorInfo && !weatherData) &&
        <>
          <p className="error-information">{errorInfo}</p>
          <img src={browserError} alt="error icon" />
        </>
      }
      <div className={`loader-container ${(!weatherData && !errorInfo) && "active"}`}>
        <img src={loaderSpinning} alt="loading icon" />
      </div>
      {weatherData && (
        <>
          <div className="place-info">
          <p className="city">{weatherData.city}</p>
          <p className="country">{weatherData.state}</p>
          <p className="temperature">{weatherData.temperature}°</p>
          </div>
          <div className="info-icon-container">
            <img className="info-icon" src={`icons/${weatherData.iconId}.svg`} alt="weather icon" />
          </div>
        </>)
      }
    </main>
  )
}
