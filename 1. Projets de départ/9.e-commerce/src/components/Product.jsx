import { useDispatch } from "react-redux";
import { updateTotalQuantity, updateTotalPrice, addOneToCart } from "../features/cartSlice";
// import { pickProduct } from "../features/productsSlice";

export default function Product({ product }) {

  const dispatch = useDispatch();

  // const handleCart = () => {
  //   dispatch(updateTotalQuantity());
  //   dispatch(updateTotalPrice(product.price));
  //   dispatch(pickProduct(product.id));
  // }

  return (
    <li className=" bg-slate-300 p-4 rounded">
      <img
      className="mb-4"
      src={`images/${product.img}.png`}
      alt={product.title} />
      <div className="flex justify-between mb-6">
        <p className="text-slate-800">{product.title}</p>
        <p className="font-bold">{`${product.price}$`}</p>
      </div>
      <button
      className={`${product.picked ? "bg-green-700" : "bg-slate-700 hover:bg-slate-800"} text-slate-50 w-full rounded py-2`}
      onClick={() => dispatch(addOneToCart(product.id))}>
        {product.picked ? "Item picked ✅" : "Add to cart"}
      </button>
    </li>
  )
}
