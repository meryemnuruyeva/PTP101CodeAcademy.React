import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"
import { Link } from "react-router-dom"

function ProductCard({ product }) {
  const { addToBasket, addToWishlist } = useContext(ShopContext)

  return (
    <div className="border p-4 hover:shadow-xl transition relative">
      {product.discount > 0 && (
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 text-sm">
          {product.discount}%
        </span>
      )}

      <img
        src={product.image}
        className="h-40 w-full object-cover mb-4"
      />

      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-[#82ae46] font-bold">${product.price}</p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => addToBasket(product)}
          className="bg-[#82ae46] text-white px-3 py-1 rounded"
        >
          Add to Cart
        </button>

        <button
          onClick={() => addToWishlist(product)}
          className="border px-3 py-1 rounded"
        >
          ❤
        </button>
      </div>

      <Link
        to={`/shop/${product.id}`}
        className="block text-sm text-blue-500 mt-2"
      >
        View Detail
      </Link>
    </div>
  )
}

export default ProductCard
