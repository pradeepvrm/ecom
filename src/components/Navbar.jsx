import { Link } from 'react-router'
import ProductSearch from './ProductSearch'

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white/30 backdrop-blur-sm sticky top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <ul className="flex items-center gap-6 text-md font-medium text-gray-700">
          <li>
            <Link className="transition hover:text-gray-950" to="/">Home</Link>
          </li>
          <li>
            <Link className="transition hover:text-gray-950" to="/products">Products</Link>
          </li>
          <li>
            <Link className="transition hover:text-gray-950" to="/cart">Cart</Link>
          </li>
        </ul>
        <ProductSearch />
        <div className="ml-auto flex items-center gap-4 text-md font-medium">
          <Link className="cursor-pointer text-gray-700 transition hover:text-gray-950" to="/login">Login</Link>
          <Link className="cursor-pointer rounded-md bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-700" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  )
}