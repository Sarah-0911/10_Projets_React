import { useDispatch } from "react-redux";
import { addOne } from "../features/productsCartSlice";

export default function Product({ product }) {

  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addOne({product}));
    // if (product.picked)
  }

  return (
    <li className=" bg-slate-300 p-4 rounded">
      <img
      className=""
      src={`images/${product.img}.png`}
      alt="" />
      <div className="flex justify-between mt-4 mb-6">
        <p>{product.title}</p>
        <p className="font-bold">{product.price}</p>
      </div>
      <button
      className="text-slate-50 bg-slate-700 w-full rounded py-2"
      onClick={handleCart}>
        Add to cart
      </button>
    </li>
  )
}
