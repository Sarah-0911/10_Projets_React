import { useDispatch } from "react-redux";
import { updateColorValue } from "../../features/gradientSlice"

export default function ColorInput({ id, value }) {

  const dispatch = useDispatch();

  const handleColorValue = (e) => {
    dispatch(updateColorValue({
      id,
      value: e.target.value
    }))
  }

  return (
    <input
    className="w-[50px] h-[50px] rounded-md bg-transparent cursor-pointer"
    type="color"
    value={value}
    onChange={handleColorValue}/>
  )
}
