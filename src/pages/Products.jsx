import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router';
import Navbar from '../components/Navbar';
import Product from '../components/Product';

export default function Products() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('search')?.trim() ?? ''

    const limit = 20

    // Reset when search changes
    useEffect(() => {
        setProducts([])
        setPage(0)
        setHasMore(true)
    }, [searchQuery])

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                const skip = page * limit
                const url = searchQuery
                    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery)}&limit=${limit}&skip=${skip}`
                    : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`

                const response = await axios.get(url)
                const fetched = response.data.products ?? []
                const total = response.data.total ?? 0

                if (page === 0) {
                    setProducts(fetched)
                } else {
                    setProducts(prev => [...prev, ...fetched])
                }

                // Determine if we have more to load
                setHasMore((page + 1) * limit < total)
            } catch (err) {
                // On error, stop trying to load more
                setHasMore(false)
                console.error('Failed to load products', err)
            } finally {
                setLoading(false)
            }
        }

        getProducts()
    }, [page, searchQuery])

    // IntersectionObserver to load next page when the last item is visible
    const observer = useRef()
    const lastProductRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prev => prev + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

  return (
    <>
    <Navbar />
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        {searchQuery ? `Search results for “${searchParams.get('search').trim()}”` : 'Products'}
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => {
          if (index === products.length - 1) {
            // attach ref to the last item
            return (
              <div key={product.id} ref={lastProductRef}>
                <Product product={product} />
              </div>
            )
          }

          return <Product key={product.id} product={product} />
        })}
      </div>

      {!loading && products.length === 0 && searchQuery && (
        <p className="mt-8 text-center text-gray-600">No products match your search.</p>
      )}

      {loading && (
        <p className="mt-6 text-center text-gray-600">Loading...</p>
      )}

      {!hasMore && products.length > 0 && (
        <p className="mt-6 text-center text-gray-600">You&apos;ve reached the end.</p>
      )}
    </main>
    </>
  )
}
