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
          <div className="flex gap-8">
            <div className="w-full">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img src={item.thumbnail} alt={item.title} className="h-20 w-20 object-contain" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-600">Remove</button>
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