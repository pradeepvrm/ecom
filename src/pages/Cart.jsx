import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'    
import OrderSummary from '../components/OrderSummary'
import { Link } from 'react-router'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const shipping = total > 50 ? 0 : 30

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-[28px] border border-white/70 bg-white/70 p-6 shadow-[0_18px_50px_-25px_rgba(15,23,42,0.25)] backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">Your bag</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Cart</h1>
        </div>

        {cart.length === 0 ? (
          <section className="glass-card p-8 text-center">
            <p className="text-slate-600">Your cart is empty.</p>
            <Link to="/products" className="primary-button mt-5">Browse products</Link>
          </section>
        ) : (
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
            <div className="w-full min-w-0 flex-1 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-[0_18px_35px_-28px_rgba(15,23,42,0.45)] sm:gap-5">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-violet-50 via-indigo-50 to-cyan-50 p-2 sm:h-28 sm:w-28">
                    <Link to={`/products/${item.id}`}><img src={item.thumbnail} alt={item.title} className="h-full w-full object-contain" /></Link>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-violet-600">${item.price}</p>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 transition hover:border-violet-200 hover:text-violet-700"
                      >
                        -
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold text-slate-700">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-700 transition hover:border-violet-200 hover:text-violet-700"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-sm font-medium text-rose-600 transition hover:bg-rose-100"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <OrderSummary total={total} itemCount={itemCount} shipping={shipping} />
          </div>
        )}
      </main>
    </div>
  )
}