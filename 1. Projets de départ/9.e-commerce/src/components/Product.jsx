import { useDispatch } from "react-redux";
import { addToCart, updateTotalQuantity, updateTotalPrice } from "../features/productsCartSlice";
import { pickProduct } from "../features/productsSlice";

export default function Product({ product }) {

  const dispatch = useDispatch();

  const handleCart = () => {
    if (!product.picked) {
      dispatch(updateTotalQuantity());
      dispatch(updateTotalPrice(product.price));
      dispatch(pickProduct(product.id));
      dispatch(addToCart(product))
    }
  }

  return (
    <li className=" bg-slate-300 p-4 rounded">
      <img
      className=""
      src={`images/${product.img}.png`}
      alt={product.img} />
      <div className="flex justify-between mt-4 mb-6">
        <p>{product.title}</p>
        <p className="font-bold">{`${product.price}$`}</p>
      </div>
      <button
      className={`${product.picked ? "bg-green-700" : "bg-slate-700 hover:bg-slate-800"} text-slate-50 w-full rounded py-2`}
      onClick={handleCart}>
        {product.picked ? "Item picked ✅" : "Add to cart"}
      </button>
    </li>
  )
}
