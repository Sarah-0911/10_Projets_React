import { useSelector } from "react-redux"
import ProductPicked from "./ProductPicked";

export default function ModalResults({ closeModal }) {

  const cartData = useSelector(state => state.cart);

  return (
    <div
    className="fixed flex justify-center items-center inset-0 bg-slate-800/75"
    onClick={closeModal}>
      <div
      className="relative max-w-[540px] w-full bg-slate-300 p-6 rounded border border-slate-600"
      onClick={(e) => e.stopPropagation()}>
        <button
        className="absolute top-2 right-2 bg-red-600 text-slate-50 text-sm py-1 w-7 rounded"
        onClick={closeModal}>
          X
        </button>
        <ul className="mt-4">
          {cartData.cartItems.length > 0 ? cartData.cartItems.map(product => (
            <ProductPicked key={product.id} product={product} />)) :
            <li className="mb-6">Add some items to your cart...</li>
          }
        </ul>
        <p>Your total: <span className="font-semibold">
          {cartData.cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)}$</span>
        </p>
        <button
        className="block mx-auto mt-6 bg-slate-800 text-slate-200 p-2 rounded">
          Proceed to checkout
        </button>
      </div>
    </div>
  )
}
