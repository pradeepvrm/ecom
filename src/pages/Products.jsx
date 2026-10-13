import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router';
import Navbar from '../components/Navbar';
import Product from '../components/Product';

export default function Products() {
    const [products, setProducts] = useState([])
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('search')?.trim() ?? ''

    useEffect(() => {
        const getProducts = async () => {
            const url = searchQuery
                ? `https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery)}`
                : 'https://dummyjson.com/products?limit=20'

            const response = await axios.get(url)
            setProducts(response.data.products ?? [])
        }

        getProducts()
    }, [searchQuery])

  return (
    <>
    <Navbar />
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        {searchQuery ? `Search results for “${searchParams.get('search').trim()}”` : 'Products'}
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {products.length === 0 && searchQuery && (
        <p className="mt-8 text-center text-gray-600">No products match your search.</p>
      )}
    </main>
    </>
  )
}