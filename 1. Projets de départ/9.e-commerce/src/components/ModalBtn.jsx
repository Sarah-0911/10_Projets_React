import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { useSelector } from "react-redux"
import shoppingCart from "../assets/shopping-cart.svg"
import ModalResults from "./ModalResults";

function ModalBtn() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if(showModal) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    }
  })

  const cartData = useSelector(state => state.productsCart)

  return (
    <>
      <button
      onClick={() => setShowModal(true)}
      className="flex gap-2 bg-slate-100 fixed top-4 right-4 py-2 px-6 rounded text-sm font-semibold">
        <img
        className="w-5 h-5"
        src={shoppingCart}
        alt="shopping cart icon" />
        <p>View your cart : <span>{cartData.totalQuantity}</span></p>
      </button>
      {showModal && createPortal(<ModalResults closeModal={() => setShowModal(false)} />, document.body)}
    </>
  )
}
export default ModalBtn
