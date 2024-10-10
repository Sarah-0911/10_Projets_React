import { useState, useEffect } from "react"
import Country from "./Country";
import ModalResult from "./ModalResult";
import { createPortal } from "react-dom";

export default function CardsList() {

  const [countries, setCountries] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const openModal = (country) => {
    setShowModal(true);
    setSelectedCountry(country);
  }

  const closeModal = () => {
    setShowModal(false);
    setSelectedCountry(null);
  }

  useEffect(() => {

    const fetchCountriesData = async() => {

      try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe");

        if(!response.ok) throw new Error();

        const data = await response.json();
        const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));

        const countriesData = sortedCountries.map(country => {
          return {
            name: country.name.common,
            flag: country.flags.svg,
            languages: Object.values(country.languages).join(', '),
            capital: country.capital[0],
            population: country.population
          }
      });

      setCountries(countriesData);

      } catch (error) {
        console.log(error);
      }
    }

    fetchCountriesData()
  }, []);


  return (
    <>
    <ul className="grid min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-[200px]">
      {countries && countries.map((country, index) => (
        <Country key={index} country={country} openModal={() => openModal(country)} />
        )
      )}
    </ul>
    {showModal && createPortal(<ModalResult closeModal={closeModal} country={selectedCountry} />, document.body)}
    </>
  )
}
