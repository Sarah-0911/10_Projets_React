export default function ({ toggleTab, id, imgURL, buttonContent }) {

  return (
    <button
    key={id}
    className="flex items-center gap-2 py-3 px-5 hover:bg-slate-600 focus:bg-slate-600 outline-none"
    onClick={() => toggleTab(id)}>
      <img className="w-5" src={imgURL} alt="lang icon" />
      <span className="text-slate-50 ml-3">{buttonContent}</span>
    </button>
  )
}
