import { Link } from 'react-router'

export default function Hero() {
    return (
        <section className="relative overflow-hidden rounded-4xl border border-white/70 bg-slate-950 px-6 py-10 text-left shadow-[0_30px_80px_-30px_rgba(15,23,42,0.8)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="absolute -left-16 top-10 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Welcome to Ecom
              </span>
              <h1 className="mt-5 max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Discover smarter <span className="bg-linear-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">everyday essentials</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Explore a curated mix of premium basics, modern accessories, and must-have upgrades made for daily life.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link className="primary-button" to="/products">
                  Browse products
                </Link>
                <Link className="secondary-button border-slate-700 bg-slate-900/40 text-white hover:text-violet-200" to="/cart">
                  View cart
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card overflow-hidden border-white/10 bg-slate-900/60 p-4 text-white shadow-2xl shadow-violet-900/20">
                <div className="rounded-3xl border border-white/10 bg-linear-to-br from-slate-800 via-slate-900 to-slate-950 p-5">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>New arrivals</span>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">20% off this week</span>
                  </div>

                  <div className="mt-5 rounded-[22px] bg-linear-to-br from-violet-500/20 via-indigo-500/10 to-cyan-400/10 p-4 ring-1 ring-white/10">
                    <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                      <span>Featured Products</span>
                    </div>
                    <div className="">
                      <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
                        className="h-36 w-full rounded-[18px] object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Best seller</p>
                      <p className="mt-2 text-xl font-bold">$129</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Free shipping</p>
                      <p className="mt-2 text-xl font-bold">Orders $50+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}