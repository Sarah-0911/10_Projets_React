import { useState, useEffect } from "react"
import Country from "./Country";

export default function CardsList() {

  const [countries, setCountries] = useState(null);

  useEffect(() => {

    const fetchCountriesData = async() => {
      const response = await fetch("https://restcountries.com/v3.1/region/europe");
      const data = await response.json();

      const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));

      const countriesData = sortedCountries.map(country => {
          return {
            name: country.name.common,
            flag: country.flags.svg,
            languages: Object.values(country.languages).toString(),
            capital: country.capital[0],
            population: country.population
          }
      });

      // console.log(countriesData);
      setCountries(countriesData);
    }

    fetchCountriesData()
  }, []);


  return (
    <ul className="grid grid-cols-4 gap-6">
      {countries && countries.map((country, index) => (
        <Country key={index} countryData={country} />
        )
      )}
    </ul>
  )
}
