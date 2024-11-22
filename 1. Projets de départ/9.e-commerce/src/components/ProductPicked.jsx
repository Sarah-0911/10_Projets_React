export default function ProductPicked({ product }) {

  const removeProduct = () => {
    console.log("removed!");

  }

  return (
    <li className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <img
        className="w-14 h-14 rounded object-cover"
        src={`images/${product.img}.png`}
        alt={product.img} />
        <p className="font-semibold">{product.title}</p>
      </div>
      <div className="flex items-center gap-3">
        <select className="w-20 p-2 rounded" name="products">
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
