import { Button } from "@material-ui/core"
import { CardElement, Elements, ElementsConsumer } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

const PaymentForm = ({ checkoutToken, prevStep, captureOrder }) => {
  const handleSubmit = async (e, stripe, elements) => {
    e.preventDefault()
    captureOrder(stripe, elements)
  }

  if (!checkoutToken) return ""

  return (
    <div>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form action="" className={"space-y-2"} onSubmit={(e) => handleSubmit(e, stripe, elements)}>
              <CardElement className={"border p-4 rounded"} />
              <div className="flex justify-between">
                <Button variant="outlined" onClick={prevStep}>
                  Back
                </Button>
                <button
                  className={
                    "px-4 py-2 block rounded bg-purple-600 text-white font-medium hover:bg-purple-800 outline"
                  }>
                  Pay {checkoutToken.live.total.formatted_with_symbol}
                </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  )
}

export default PaymentForm
