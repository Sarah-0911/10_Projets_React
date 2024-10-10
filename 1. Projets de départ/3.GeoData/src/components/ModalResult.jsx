import { useEffect } from "react";

export default function ModalResult({ country, closeModal }) {

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
      className="relative bg-slate-100 p-6 rounded min-w-[400px]"
      onClick={(e) => e.stopPropagation()}>
        <button
        className="absolute right-1 top-2 bg-red-600 hover:bg-red-700 w-7 h-7 rounded text-gray-50 text-sm"
        onClick={closeModal}>
          X
        </button>
        <h2 className="mb-4">Here is {country.name}'s information:</h2>
        <p className="my-2">
          <span className="font-semibold">Language(s): </span>
          {country.languages}
        </p>
        <p className="my-2">
          <span className="font-semibold">Capital: </span>
          {country.capital}
        </p>
        <p className="my-2">
          <span className="font-semibold">Population: </span>
          {country.population}
        </p>
      </div>
    </div>
  )
}
