import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import Navbar from '../components/Navbar'
import { CartContext } from '../context/CartContext'

export default function SingleProduct() {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setProduct(response.data)
    })
  }, [id])

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {!product ? (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white/60 p-10 text-center text-slate-600 shadow-lg shadow-slate-200/50">
            Loading product...
          </div>
        ) : (
          <section className="grid gap-8 rounded-4xl border border-white/70 bg-white/80 p-5 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm md:grid-cols-2 md:p-7">
            <div className="flex min-h-105 items-center justify-center overflow-hidden rounded-[28px] bg-linear-to-br from-violet-50 via-indigo-50 to-cyan-50 p-6">
              <img
                src={product.images[0]}
                alt={product.title}
                className="max-h-105 w-full object-contain"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">{product.category}</p>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{product.title}</h1>
              <p className="mt-4 text-base leading-7 text-slate-600">{product.description}</p>

              <div className="mt-6 flex items-center gap-3">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  {product.availabilityStatus}
                </span>
                <span className="text-sm font-medium text-slate-500">Free shipping over $50</span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <p className="text-3xl font-black text-slate-900">${(product.price * 0.8).toFixed(2)}</p>
                <p className="text-sm text-slate-500 line-through">${product.price}</p>
              </div>

              <button
                className="primary-button mt-8"
                type="button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </section>
        )}
      </main>
    </>
  )
}