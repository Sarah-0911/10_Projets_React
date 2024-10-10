export default function Country({ country, openModal }) {

  return (
    <li
    className=" relative max-w-[270px] max-h-[180px] cursor-pointer transition-transform duration-300 hover:-translate-y-1"
    onClick={openModal}
    >
      <img
      className="rounded w-full h-full object-cover"
      src={country.flag} alt="flag" />
      <h2 className="absolute top-0 left-0 p-2 text-sm md:text-base bg-slate-50 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] rounded">
        {country.name}
      </h2>
    </li>
  )
}
