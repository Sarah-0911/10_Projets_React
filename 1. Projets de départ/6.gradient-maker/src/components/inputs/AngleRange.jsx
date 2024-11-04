import { useSelector, useDispatch } from "react-redux"
import { updateAngle } from "../../features/gradientSlice";

export default function AngleRange() {

  const dispatch = useDispatch();
  const angle = useSelector(state => state.gradient.angle)

  return (
    <input
    className="w-full h-1 rounded-lg cursor-pointer"
    type="range"
    value={angle}
    min="0"
    max="360"
    onChange={(e) => dispatch(updateAngle(e.target.value))}
    />
  )
}
