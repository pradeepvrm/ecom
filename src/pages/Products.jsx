import { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSearchParams } from 'react-router';
import Navbar from '../components/Navbar';
import Product from '../components/Product';

export default function Products() {
    const [products, setProducts] = useState([])
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('search')?.trim() ?? ''

    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [, setTotal] = useState(null)
    const limit = 12

    const fetchProducts = async (currentPage = 0, replace = false) => {
      try {
        const skip = currentPage * limit
        const url = searchQuery
        ? `https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery)}&limit=${limit}&skip=${skip}`
        : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`

        const response = await axios.get(url)
        const fetched = response.data.products ?? []
        const fetchedTotal = response.data.total ?? 0

        setProducts((prev) => {
          const next = replace ? fetched : [...prev, ...fetched]

          if (fetchedTotal !== null) {
            setTotal(fetchedTotal)
            setHasMore(next.length < fetchedTotal)
          } else {
            setHasMore(fetched.length === limit)
          }
          return next
        })
      } catch (error) {
        console.error('Error fetching products:', error)
        setHasMore(false)
      }
    }

    useEffect(() => {
      setProducts([])
      setPage(0)
      setHasMore(true)
      setTotal(null)
      fetchProducts(0, true)
    }, [searchQuery])

    const loadMore = () => {
      fetchProducts(page, false)
      setPage((currentPage) => currentPage + 1)
    }

  return (
    <>
    <Navbar />
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        {searchQuery ? `Search results for “${searchParams.get('search').trim()}”` : 'Products'}
      </h1>
      <InfiniteScroll
        dataLength={products.length}
        next={loadMore}
        hasMore={hasMore}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </InfiniteScroll>
      {products.length === 0 && searchQuery && (
        <p className="mt-8 text-center text-gray-600">No products match your search.</p>
      )}
    </main>
    </>
  )
}
