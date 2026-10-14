import { Link } from 'react-router'

export default function OrderSummary({ total, itemCount = 2, shipping = 30 }) {
    const productTotal = total
    const shippingTotal = shipping
    const finalTotal = productTotal + shippingTotal

    return (
        <div className="w-full rounded-[28px] border border-slate-800 bg-slate-950 p-5 text-slate-50 shadow-[0_28px_60px_-28px_rgba(15,23,42,0.8)] max-h-80 sm:p-6 lg:max-w-sm lg:shrink-0">
            <h2 className="mb-5 text-xl font-bold tracking-tight text-white">Order Summary</h2>

            <div className="space-y-4 border-t border-slate-700 pt-4">
                <div className="flex items-center justify-between gap-3 text-base text-slate-300">
                    <span>Products ({itemCount})</span>
                    <span className="shrink-0 font-medium text-white">${productTotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between gap-3 text-base text-slate-300">
                    <span>Shipping</span>
                    <span className="shrink-0 font-medium text-white">${shippingTotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-slate-700 pt-4 text-base font-bold text-white">
                    <span>Total amount</span>
                    <span className="shrink-0">${finalTotal.toFixed(2)}</span>
                </div>

                <Link
                    to="/checkout"
                    className="mt-2 flex w-full items-center justify-center rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-2 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/25 sm:py-4 sm:text-lg"
                >
                    Go to checkout
                </Link>
            </div>
        </div>
    )
}