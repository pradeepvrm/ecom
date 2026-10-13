import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'    
import OrderSummary from '../components/OrderSummary'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Cart</h1>
        
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
            <div className="w-full min-w-0 flex-1">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 border-b py-4 first:pt-0 sm:gap-4">
                  <img src={item.thumbnail} alt={item.title} className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20" />
                  <div className="min-w-0 flex-1">
                    <h3 className="break-words font-semibold">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.title}`}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="rounded border border-gray-300 px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="min-w-6 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.title}`}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded border border-gray-300 px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-600 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <OrderSummary total={total} itemCount={itemCount} shipping={30} />
          </div>
        )}
      </main>
    </div>
  )
}