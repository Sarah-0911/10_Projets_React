import { useEffect } from "react";
import { useSelector } from "react-redux";
import getGradientCSSValues from "../../utils/getGradientCSSValues";

export default function ModalResult({ closeModal }) {

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    }
  }, [])

  const gradientData = useSelector(state => state.gradient);
  const gradientResult = `background-image: ${getGradientCSSValues(gradientData)}`

  const handleCopy = (e) => {
    navigator.clipboard.writeText(gradientResult)
    e.target.textContent = "Copied!";

    setTimeout(() => {
      e.target.textContent = "Copy";
    }, 1000)
  }

  return (
    <div
    className="fixed inset-0 flex justify-center items-center bg-slate-700/75 z-10"
    onClick={closeModal}>
      <div
      className="bg-slate-100 w-[400px] p-6 rounded"
      onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between mb-4">
          <p className="font-semibold">Here is your code 🎉</p>
          <div className="flex gap-2 text-slate-100 text-sm">
            <button
            className="py-1 px-4 rounded bg-blue-700 hover:bg-blue-800"
            onClick={handleCopy}>
              Copy
            </button>
            <button
            className="py-1 px-4 rounded bg-red-700 hover:bg-red-800"
            onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-sm text-sm">
          {gradientResult}
        </div>
      </div>
    </div>
  )
}
