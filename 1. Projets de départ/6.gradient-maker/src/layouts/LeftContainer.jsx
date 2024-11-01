import { useSelector } from "react-redux"

import ColorInput from "../components/inputs/ColorInput"
import ColorRange from "../components/inputs/ColorRange"
import AngleRange from "../components/inputs/AngleRange"
import SelectColor from "../components/inputs/SelectColor"

import UpdateColorButton from "../components/UpdateColorButton"
import ModalButton from "../components/ModalButton"


export default function LeftContainer() {

  const gradientData = useSelector(state => state.gradient)

  return (
    <div className="w-[50%] text-slate-100">

        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold">Gradient Generator</h1>
          <p>Bring style to your apps</p>
        </div>

        <div className="mb-4">
          <p className="mb-1">Colors, min 2, max 5.</p>
          <div className="flex gap-2">
            {gradientData.colors.map(color => (
              <ColorInput key={color.id} id={color.id} value={color.value} />
            ))}
          </div>
          <div className="flex mt-2 gap-1">
            <UpdateColorButton />
            <UpdateColorButton />
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-1">Pick and change a Color's position</p>
          <SelectColor />
        </div>

        <div className="mb-4">
          <p className="mb-1">Color's position</p>
          <ColorRange />
        </div>

        <div className="mb-4">
          <p className="mb-1">Gradient's global angle</p>
          <AngleRange />
        </div>

        <ModalButton />

      </div>
  )
}
