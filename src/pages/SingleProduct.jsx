import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import Navbar from '../components/Navbar'
import { CartContext } from '../context/CartContext'

export default function SingleProduct() {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setProduct(response.data)
    })
  }, [id])

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {!product ? (
          <p className="text-gray-600">Loading product...</p>
        ) : (
          <section className="grid gap-8 md:grid-cols-2">
            <div className="flex min-h-80 items-center justify-center rounded-lg bg-gray-50 p-8">
              <img
                src={product.images[0]}
                alt={product.title}
                className="max-h-96 w-full object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm capitalize text-gray-500">{product.category}</p>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">{product.title}</h1>
              <p className="mt-4 text-gray-600">{product.description}</p>
              <p className="mt-6 text-2xl font-bold text-gray-900">${product.price}</p>
              <button
                className="mt-6 rounded-md bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-gray-700"
                type="button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </section>
        )}
      </main>
    </>
  )
}