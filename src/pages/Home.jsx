import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <Hero />
        <section className="grid gap-8 py-12 sm:grid-cols-3 sm:py-16">
          <div>
            <h2 className="font-semibold text-gray-900">A little bit of everything</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Browse a range of products picked for daily life.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Easy to explore</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Find product details and prices at a glance.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Ready when you are</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Start browsing and find something that fits your style.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}