import { UserButton, useAuth } from '@clerk/react'
import { Link } from 'react-router'
import ProductSearch from './ProductSearch'

function AccountMenu() {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) return null

  if (isSignedIn) {
    return (
      <div className="rounded-full border border-white/10 bg-white/50 p-1.5 text-slate-100 shadow-lg shadow-slate-950/20">
        <UserButton showName />
      </div>
    )
  }

  return (
    <>
      <Link className="text-sm font-medium text-slate-200 transition hover:text-white" to="/login">Login</Link>
      <Link className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-violet-50" to="/signup">
        Sign up
      </Link>
    </>
  )
}

export default function Navbar() {
  return (
    <nav className="sticky left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

        <ul className="flex items-center gap-6 text-sm font-medium text-slate-200">
          <li>
            <Link className="transition hover:text-white" to="/">Home</Link>
          </li>
          <li>
            <Link className="transition hover:text-white" to="/products">Products</Link>
          </li>
          <li>
            <Link className="transition hover:text-white" to="/cart">Cart</Link>
          </li>
        </ul>

        <ProductSearch />

        <div className="ml-auto flex items-center gap-4 text-sm font-medium">
          <AccountMenu />
        </div>
      </div>
    </nav>
  )
}