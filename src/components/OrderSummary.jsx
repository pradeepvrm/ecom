export default function OrderSummary({ total, itemCount = 2        , shipping = 30 }) {
    const productTotal = Number(total) || 0
    const shippingTotal = Number(shipping) || 0
    const finalTotal = productTotal + shippingTotal

    return (
        <div className=" w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="mb-4 text-xl font-medium tracking-tight text-gray-900">Order Summary</h2>

            <div className="border-t border-gray-200 pt-4">
                <div className="mb-5 flex items-center justify-between text-xl text-gray-700">
                    <span>Products ({itemCount})</span>
                    <span className="font-medium">${productTotal.toFixed(2)}</span>
                </div>

                <div className="mb-5 flex items-center justify-between text-xl text-gray-700">
                    <span>Shipping</span>
                    <span className="font-medium">${shippingTotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-xl font-bold text-gray-900">
                    <span>Total amount</span>
                    <span>${finalTotal.toFixed(2)}</span>
                </div>

                <button
                    type="button"
                    className="mt-4 w-full rounded-xl bg-gray-900 px-2 py-4 text-xl font-medium text-white transition hover:bg-gray-700"
                >
                    Go to checkout
                </button>
            </div>
        </div>
    )
}