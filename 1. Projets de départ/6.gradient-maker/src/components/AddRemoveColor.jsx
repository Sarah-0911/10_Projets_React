import { addColor, removeColor } from "../features/gradientSlice";
import { useDispatch } from "react-redux";

export default function AddRemoveColor({ sign, action }) {

  const dispatch = useDispatch();

  const handleClick = () => {
    if (action === "remove") {
      dispatch(removeColor())
    } else {
      dispatch(addColor());
    }
  }
  
  return (
    <button
    onClick={handleClick}
    className="flex border border-gray-400 min-w-[40px] px-4 pb-1 hover:bg-gray-900 rounded">
      {sign}
    </button>
  )
}
