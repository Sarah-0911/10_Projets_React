import { useSelector } from "react-redux"
import getGradientCSSValues from "../utils/getGradientCSSValues";

export default function Gradient() {

  const gradientData = useSelector(state => state.gradient)

  return (
    <div
    className="w-1/2 border-4 border-slate-200 ml-6 bg-gradient-to-r"
    style={{ backgroundImage: getGradientCSSValues(gradientData).slice(0, -1) }}
    >
    </div>
  )
}
