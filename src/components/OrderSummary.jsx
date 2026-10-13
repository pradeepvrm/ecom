export default function OrderSummary({ total, itemCount = 2        , shipping = 30 }) {
    const productTotal = Number(total) || 0
    const shippingTotal = Number(shipping) || 0
    const finalTotal = productTotal + shippingTotal

    return (
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:max-w-sm lg:shrink-0">
            <h2 className="mb-4 text-lg font-medium tracking-tight text-gray-900 sm:text-xl">Order Summary</h2>

            <div className="border-t border-gray-200 pt-4">
                <div className="mb-5 flex items-center justify-between gap-3 text-base text-gray-700 sm:text-lg">
                    <span>Products ({itemCount})</span>
                    <span className="shrink-0 font-medium">${productTotal.toFixed(2)}</span>
                </div>

                <div className="mb-5 flex items-center justify-between gap-3 text-base text-gray-700 sm:text-lg">
                    <span>Shipping</span>
                    <span className="shrink-0 font-medium">${shippingTotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-gray-200 pt-4 text-base font-bold text-gray-900 sm:text-lg">
                    <span>Total amount</span>
                    <span className="shrink-0">${finalTotal.toFixed(2)}</span>
                </div>

                <button
                    type="button"
                    className="mt-4 w-full rounded-xl bg-gray-900 px-2 py-3 text-base font-medium text-white transition hover:bg-gray-700 sm:py-4 sm:text-lg"
                >
                    Go to checkout
                </button>
            </div>
        </div>
    )
}