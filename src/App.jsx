import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { CartProvider } from './context/CartContext'
import { Home, Products, SingleProduct, Cart, Login, Signup } from './pages'

function App() {

  return (
    <>
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </CartProvider>

    </>
  )
}

export default App
