export default function ColorInput({ id, color }) {

  console.log(color);
  
  return (
    <input
    className="w-[50px] h-[50px] rounded-md bg-transparent cursor-pointer"
    type="color"
    value={color} />
  )
}
