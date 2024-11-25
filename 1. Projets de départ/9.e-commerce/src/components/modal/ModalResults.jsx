import { useSelector } from "react-redux"
import ProductPicked from "./ProductPicked";

export default function ModalResults({ closeModal }) {

  const productsData = useSelector(state => state.products);
  const cartData = useSelector(state => state.cart);

  const pickedProducts = productsData.list.filter(product => product.picked);
  console.log(pickedProducts);

  return (
    <div
    className="fixed flex justify-center items-center inset-0 bg-slate-800/75"
    onClick={closeModal}>
      <div
      className="relative max-w-[540px] w-full bg-slate-300 p-6 rounded"
      onClick={(e) => e.stopPropagation()}>
        <button
        className="absolute top-2 right-2 bg-red-600 text-slate-50 text-sm py-1 w-7 rounded"
        onClick={closeModal}>
          X
        </button>
        <ul className="mt-4">
          {pickedProducts.length > 0 ? pickedProducts.map(product => (
            <ProductPicked key={product.id} product={product} />)) :
            <p className="mb-6">Add some items to your cart...</p>
          }
        </ul>
        <p>Your total: <span className="font-semibold">{`${cartData.totalPrice.toFixed(2)}$`}</span></p>
        <button className="block mx-auto mt-6 bg-slate-800 text-slate-100 p-2 rounded">Proceed to checkout</button>
      </div>
    </div>
  )
}
