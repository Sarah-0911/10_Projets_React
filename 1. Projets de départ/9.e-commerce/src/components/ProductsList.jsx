import { useSelector, useDispatch } from "react-redux"
import { getProductsData } from "../features/productsSlice"
import { useEffect } from "react";
import Product from "./Product";

export default function ProductsList() {

  const productsData = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsData.list.length === 0) {
      dispatch(getProductsData());
    }
  }, [productsData.list])

  return (
    <div className="max-w-3xl mt-8 mx-auto p-2">
      <h1 className="text-slate-100 mb-4 text-lg">Here are our products</h1>
      <ul className="grid min-[500px]:grid-cols-2 md:grid-cols-3 gap-4">
        {productsData.list?.length && productsData.list.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
