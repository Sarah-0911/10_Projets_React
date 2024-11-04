import { useSelector, useDispatch } from "react-redux"
import { updateColorPosition } from "../../features/gradientSlice";

export default function ColorRangePosition() {
  const dispatch = useDispatch();
  const gradientData = useSelector(state => state.gradient);

  const selectedPositionValue = gradientData.colors.find(color => color.id === gradientData.pickedColorID).position;

  return (
    <input
    className="w-full h-1 rounded-lg cursor-pointer"
    type="range"
    value={selectedPositionValue}
    onChange={(e) => dispatch(updateColorPosition(e.target.value))}
    />
  )
}
