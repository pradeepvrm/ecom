import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router'

export default function ProductSearch() {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [searchError, setSearchError] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const navigate = useNavigate()
  const normalizedQuery = query.trim()

  useEffect(() => {
    if (!normalizedQuery) {
      return undefined
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/search', {
          params: { q: normalizedQuery, limit: 5 },
          signal: controller.signal,
        })
        setProducts(response.data.products)
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error('Unable to search products:', error)
          setProducts([])
          setSearchError('Search is temporarily unavailable.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsSearching(false)
        }
      }
    }, 300)

    return () => {
      clearTimeout(timeoutId)
      controller.abort()
    }
  }, [normalizedQuery])

  const handleSearch = (event) => {
    event.preventDefault()
    if (!normalizedQuery) return

    setIsSearchFocused(false)
    navigate(`/products?search=${encodeURIComponent(normalizedQuery)}`)
  }

  const handleQueryChange = (event) => {
    const nextQuery = event.target.value
    setQuery(nextQuery)
    setProducts([])
    setSearchError('')
    setIsSearching(Boolean(nextQuery.trim()))
  }

  return (
    <form className="relative order-3 w-full sm:order-none sm:mx-auto sm:max-w-md" role="search" onSubmit={handleSearch}>
      <label className="sr-only" htmlFor="navbar-product-search">Search products</label>
      <input
        autoComplete="off"
        className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 text-sm text-gray-900 outline-none transition placeholder:text-gray-500 focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
        id="navbar-product-search"
        onBlur={() => setIsSearchFocused(false)}
        onChange={handleQueryChange}
        onFocus={() => setIsSearchFocused(true)}
        placeholder="Search products..."
        type="search"
        value={query}
      />
      <button
        aria-label="Submit product search"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-500 transition hover:text-gray-900"
        type="submit"
      >
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35m1.6-5.15a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z" />
        </svg>
      </button>
      {isSearchFocused && normalizedQuery && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
          {isSearching && (
            <p className="px-4 py-3 text-sm text-gray-500" role="status">Searching products...</p>
          )}
          {!isSearching && searchError && (
            <p className="px-4 py-3 text-sm text-red-600" role="alert">{searchError}</p>
          )}
          {!isSearching && !searchError && products.length > 0 && (
            <ul aria-label="Product search suggestions">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-800 transition hover:bg-gray-50"
                    onMouseDown={(event) => event.preventDefault()}
                    to={`/products/${product.id}`}
                  >
                    <img className="h-10 w-10 rounded object-contain" src={product.thumbnail} alt="" />
                    <span className="min-w-0 flex-1 truncate">{product.title}</span>
                    <span className="text-gray-500">${product.price}</span>
                  </Link>
                </li>
              ))}
              <li className="border-t border-gray-100">
                <button
                  className="w-full px-4 py-3 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  onMouseDown={(event) => event.preventDefault()}
                  type="submit"
                >
                  See all results for “{normalizedQuery}”
                </button>
              </li>
            </ul>
          )}
          {!isSearching && !searchError && products.length === 0 && (
            <div className="px-4 py-3 text-sm text-gray-500">
              <p>No products found.</p>
              <button
                className="mt-2 font-medium text-gray-800 hover:underline"
                onMouseDown={(event) => event.preventDefault()}
                type="submit"
              >
                See all results for “{normalizedQuery}”
              </button>
            </div>
          )}
        </div>
      )}
    </form>
  )
}
