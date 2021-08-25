import React, {useEffect} from 'react'

const Summary = ({ checkoutToken }) => {

    if (!checkoutToken) return "";

    return (
        <div className={"shadow p-6 rounded"}>
            <h2 className={"text-xl antialiased font-medium text-gray-700 mb-6"}>
                Order Summary
            </h2>

            {
                checkoutToken.live.line_items.map(item => (
                    <div key={item.id} className="flex rounded mb-4">
                        <div className={""}>
                            <h4 className={"font-medium mb-2 text-gray-600"}>{item.name}</h4>
                            <p className={"text-gray-500"}>Quantity: {item.quantity}</p>
                        </div>
                        <p className={"font-medium text-gray-600 ml-auto"}>{item.price.formatted_with_symbol}</p>
                    </div>
                ))
            }

            <h3 className={"font-medium text-gray-600"}>Total</h3>
            <p className={"text-gray-500"}>{checkoutToken.live.total.formatted_with_symbol}</p>

        </div>
    )
}

export default Summary
