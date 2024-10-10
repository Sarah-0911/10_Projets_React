import { useEffect } from "react";

export default function ModalResult({ countryData, closeModal }) {

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    }
  }, []);

  return (
    <div
    className="fixed inset-0 bg-slate-800/75 flex justify-center items-center"
    onClick={closeModal}>
      <div
      className="relative bg-slate-100 p-6 rounded w-[360px]"
      onClick={(e) => e.stopPropagation()}>
        <button
        className="absolute right-1 top-1 bg-red-700 px-2 py-1 rounded text-gray-50 text-sm"
        onClick={closeModal}>
          X
        </button>
        <h2 className="mb-4">Here is {countryData.name}'s information:</h2>
        <p className="my-2"><span className="font-semibold">Language(s): </span>{countryData.languages}</p>
        <p className="my-2"><span className="font-semibold">Capital: </span>{countryData.capital}</p>
        <p className="my-2"><span className="font-semibold">Population: </span>{countryData.population}</p>
      </div>
    </div>
  )
}
