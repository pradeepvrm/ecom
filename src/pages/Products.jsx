import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Product from '../components/Product';

export default function Products() {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get('https://dummyjson.com/products?limit=200')
            setProducts(response.data.products)
        }
        getProducts()
    }, [])

  return (
    <>
    <Navbar />
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
    </>
  )
}