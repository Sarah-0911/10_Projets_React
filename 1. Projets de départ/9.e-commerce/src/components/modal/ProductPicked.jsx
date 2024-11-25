import { useDispatch } from "react-redux";
import { unpickProduct } from "../../features/productsSlice";
import { addToCart, removeFromCart } from "../../features/productsCartSlice";

export default function ProductPicked({ product }) {

  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(addToCart(product));
  } // pour ajouter au dropdown select, à réadapter pour après

  const removeProduct = () => {
    dispatch(removeFromCart(product));
    dispatch(unpickProduct(product));
  }

  return (
    <li className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <img
        className="w-14 h-14 rounded object-cover"
        src={`images/${product.img}.png`}
        alt={product.title} />
        <p className="font-semibold">{product.title}</p>
      </div>
      <div className="flex items-center gap-3">
        <select className="w-20 p-2 rounded cursor-pointer" name="Qty">
          <option value="1">1</option>
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
