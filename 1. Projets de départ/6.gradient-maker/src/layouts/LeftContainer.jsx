import Color from "../components/Color"
import ColorRange from "../components/ColorRange"
import ColorSelect from "../components/ColorSelect"
import ModalButton from "../components/ModalButton"
import UpdateColorButton from "../components/UpdateColorButton"

export default function LeftContainer() {
  return (
    <div className="w-[50%] text-slate-100 p-4">

        <div className="text-center mb-6">
          <h1 className="text-xl">GradientGenerator</h1>
          <p>Bring style to your apps</p>
        </div>

        <div className="mb-4">
          <p className="mb-1">Colors, min 2, max 5.</p>
          <div className="flex gap-2">
            <Color/>
            <Color/>
          </div>
          <div className="flex mt-2 gap-1">
            <UpdateColorButton />
            <UpdateColorButton />
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-1">Pick and change a Color's position</p>
          <ColorSelect />
        </div>

        <div className="mb-4">
          <p className="mb-1">Color's position</p>
          <ColorRange />
        </div>

        <div className="mb-4">
          <p className="mb-1">Gradient's global angle</p>
          <ColorRange />
        </div>

        <ModalButton />

      </div>
  )
}
