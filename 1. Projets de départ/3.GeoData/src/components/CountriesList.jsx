import { useState, useEffect } from "react"
import Country from "./Country";

export default function CardsList() {

  const [countries, setCountries] = useState(null);

  useEffect(() => {

    const fetchCountriesData = async() => {
      const response = await fetch("https://restcountries.com/v3.1/region/europe");
      const data = await response.json();

      const sorted = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      console.log(sorted);

      sorted.forEach(country => {
          console.log(country.name.common);

      });

    }

    fetchCountriesData()
  }, [])


  return (
    <div>
      <Country />
    </div>
  )
}
