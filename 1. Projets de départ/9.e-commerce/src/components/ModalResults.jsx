import ProductPicked from "./ProductPicked";
import { useSelector } from "react-redux"

export default function ModalResults({ closeModal }) {

  const productsData = useSelector(state => state.products);

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
        <ul  className="mt-4">
          {productsData.list.map(product => (
            product.picked && <ProductPicked key={product.id} product={product} />
          ))}
        </ul>
        <p>Your total: <span className="font-semibold">30.65$</span></p>
        <button className="bg-slate-800 text-slate-100 p-2 rounded">Proceed to checkout</button>
      </div>
    </div>
  )
}
