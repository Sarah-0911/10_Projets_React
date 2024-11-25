import { useDispatch } from "react-redux";
import { addOneToCart, removeFromCart } from "../../features/cartSlice";

export default function ProductPicked({ product }) {

  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(addOneToCart());
  } // pour ajouter au dropdown select, à réadapter pour après

  const removeProduct = () => {
    dispatch(removeFromCart(product));
  }

  return (
    <li className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <img
        className="w-14 h-14 rounded"
        src={`images/${product.img}.png`}
        alt={product.title} />
        <p className="font-semibold">{product.title}</p>
      </div>
      <div className="flex items-center gap-3">
        <select
        className="w-20 p-2 rounded cursor-pointer"
        name="Qty"
        // onChange={e => dispatch()}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <button
        className="bg-slate-900 text-slate-200 rounded p-2 text-sm"
        onClick={removeProduct}>
          Remove from cart
        </button>
      </div>
    </li>
  )
}
