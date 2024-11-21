import { useSelector, useDispatch } from "react-redux"
import { getProductsData } from "../features/productsSlice"
import { useEffect } from "react";
import Product from "./Product";

export default function ProductsList() {

  const productsData = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData());
  }, [])

  return (
    <ul className="grid grid-cols-3 gap-4">
      {productsData.list?.length && productsData.list.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  )

}
