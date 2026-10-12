import { Link } from 'react-router'

export default function Hero() {
    return (
        <section className="rounded-2xl bg-gray-50 px-6 py-16 text-center sm:px-12 sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Welcome to Ecom
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Find something you'll love.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Explore a curated collection of everyday essentials and discover your next favorite.
          </p>
          <Link
            className="mt-8 inline-flex rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
            to="/products"
          >
            Browse products
          </Link>
        </section>
    )
}