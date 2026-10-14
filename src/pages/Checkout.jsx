import { useContext, useState } from 'react'
import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import { CartContext } from '../context/CartContext'

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 30
  const total = subtotal + shipping

  function placeOrder(event) {
    event.preventDefault()
    clearCart()
    setOrderPlaced(true)
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Link to="/cart" className="text-sm font-medium text-violet-700 hover:text-violet-900">Back to cart</Link>
        <h1 className="mb-6 mt-3 text-3xl font-bold text-slate-900">Checkout</h1>

        {orderPlaced ? (
          <section className="glass-card p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900">Order placed!</h2>
            <p className="mt-2 text-slate-600">Thanks for shopping with us.</p>
            <Link to="/products" className="primary-button mt-5">Continue shopping</Link>
          </section>
        ) : cart.length === 0 ? (
          <section className="glass-card p-8 text-center">
            <p className="text-slate-600">Your cart is empty.</p>
            <Link to="/products" className="primary-button mt-5">Browse products</Link>
          </section>
        ) : (
          <form onSubmit={placeOrder} className="grid gap-6 md:grid-cols-[1fr_320px]">
            <section className="glass-card space-y-4 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Delivery details</h2>
              <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3" name="name" placeholder="Full name" autoComplete="name" required />
              <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3" name="email" type="email" placeholder="Email address" autoComplete="email" required />
              <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3" name="address" placeholder="Delivery address" autoComplete="street-address" required />
            </section>

            <aside className="glass-card h-fit p-6">
              <h2 className="mb-4 text-xl font-semibold text-slate-900">Order summary</h2>
              <ul className="mb-4 space-y-3">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between gap-3 text-sm text-slate-600">
                    <span>{item.title} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 border-t border-slate-200 pt-4 text-sm">
                <p className="flex justify-between text-slate-600"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></p>
                <p className="flex justify-between text-slate-600"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></p>
                <p className="flex justify-between border-t border-slate-200 pt-3 text-base font-bold text-slate-900"><span>Total</span><span>${total.toFixed(2)}</span></p>
              </div>
              <button className="primary-button mt-5 w-full" type="submit">Place order</button>
            </aside>
          </form>
        )}
      </main>
    </>
  )
}
