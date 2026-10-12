import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Product({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex h-56 items-center justify-center bg-gray-50 p-6">
        <img
          className="h-full w-full object-contain"
          src={product.image}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-sm capitalize text-gray-500">{product.category}</p>
        <h2 className="line-clamp-2 min-h-12 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>
        <p className="mt-3 line-clamp-3 flex-1 text-sm text-gray-600">
          {product.description}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-lg font-bold text-gray-900">${product.price}</p>
          <button
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
            type="button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}