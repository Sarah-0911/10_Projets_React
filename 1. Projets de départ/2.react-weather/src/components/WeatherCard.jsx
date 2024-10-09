import { useState } from "react";
import loader from "../assets/loader.svg";
import './WeatherCard.css'

export default function WeatherCard() {

  const [data, setdata] = useState({
    loader: true,
    data: undefined,
    error: false
})

  return (
    <main className="card-container">
      <div className="loader-container">
      {data.loader && <img src={loader} alt="loading icon" />}
      </div>
      <div className="place-info">
        <p className="city">Paris</p>
        <p className="country">France</p>
        <p className="temperature">17°</p>
      </div>
      <div className="info-icon-container">
        <img className="info-icon" src="icons/01d.svg" alt="weather icon" />
      </div>
    </main>
  )
}
