import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router'

export default function Product({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/85 p-3 shadow-[0_18px_38px_-25px_rgba(15,23,42,0.42)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_60px_-25px_rgba(76,29,149,0.35)]">
      <div className="flex h-56 items-center justify-center overflow-hidden rounded-[22px] bg-line-to-br from-violet-50 via-indigo-50 to-cyan-50 p-6">
        <Link className="h-full w-full" to={`/products/${product.id}`}>
          <img className="h-full w-full object-contain transition duration-200 group-hover:scale-105" src={product.thumbnail} alt={product.title} />
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">{product.brand}</p>
        <h2 className="line-clamp-2 min-h-12 text-lg font-semibold text-slate-900">{product.title}</h2>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">{product.description}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Price</p>
            <p className="mt-1 text-xl font-bold text-slate-900">${product.price}</p>
          </div>

          <button
            className="primary-button px-4 py-2.5 text-sm"
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