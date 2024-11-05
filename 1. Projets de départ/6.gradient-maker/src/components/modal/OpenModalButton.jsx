import { createPortal } from "react-dom";
import { useState } from "react";
import ModalResult from "./ModalResult";

export default function OpenModalButton() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
      className=" my-2 py-2 px-4 bg-blue-700 rounded"
      onClick={() => setShowModal(true)}>
        Get the Code !
      </button>
      {showModal && createPortal(<ModalResult closeModal={() => setShowModal(false)} />, document.body)}
    </>
  )
}
