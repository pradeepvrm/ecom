import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { Home, Products, Cart, Login, Signup } from './pages'

function App() {

  return (
    <>
    <Router> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
