import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Hero />

        <section className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            {
              title: 'A little bit of everything',
              text: 'Browse a range of products picked for daily life, from home upgrades to must-have essentials.'
            },
            {
              title: 'Easy to explore',
              text: 'Find product details, standout pricing, and the latest arrivals at a glance.'
            },
            {
              title: 'Ready when you are',
              text: 'Start browsing and discover something that fits your style, routine, and budget.'
            }
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              {/* <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-indigo-500 text-base font-bold text-white shadow-lg shadow-violet-500/20">
                {item.title[0]}
              </div> */}
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}