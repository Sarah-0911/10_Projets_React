import { useSelector, useDispatch } from "react-redux"
import { pickColor } from "../../features/gradientSlice";

export default function SelectColor() {

  const gradientData = useSelector(state => state.gradient);
  const dispatch = useDispatch();


  return (
    <select
    className="bg-slate-900 py-1 px-2 mt-1 cursor-pointer border border-gray-700 outline-none focus:border-gray-500" onChange={e => dispatch(pickColor(Number(e.target.value)))}
    >
    {gradientData.colors.map(color => (
            <option
            key={color.id}
            value={color.id}>
              {`Color ${color.id}`}
            </option>
          ))}
    </select>
  )
}
