import { createPortal } from "react-dom";
import { useState } from "react";
import ModalResult from "./ModalResult";

export default function OpenModalButton() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
      className=" my-2 py-2 px-6 bg-blue-700 rounded-md"
      onClick={() => setShowModal(!showModal)}>
        Get the Code !
      </button>
      {showModal && createPortal(<ModalResult closeModal={() => setShowModal(!showModal)} />, document.body)}
    </>
  )
}
