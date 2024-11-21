import shoppingCart from "../assets/shopping-cart.svg"

function ModalBtn() {
  return (
    <button
    className="flex gap-2 bg-slate-100 fixed top-4 right-4 py-2 px-4 rounded text-sm font-semibold">
      <img
      className="w-5 h-5"
      src={shoppingCart}
      alt="shopping cart icon" />
      <p>View your cart : <span>0</span></p>
    </button>
  )
}
export default ModalBtn
