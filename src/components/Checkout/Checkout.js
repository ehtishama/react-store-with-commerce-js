import { Stepper, Step, StepLabel } from "@material-ui/core"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { commerce } from "../../lib/commerce"
import AddressForm from "./AddressForm/AddressForm"
import PaymentForm from "./PaymentForm/PaymentForm"
import Summary from "./Summary/Summary"
import { CardElement } from "@stripe/react-stripe-js"
import Confirmation from "./Confirmation/Confirmation"

const Checkout = () => {
  const steps = ["Shipping Address", "Payment Method"]

  const cart = useSelector((state) => state.cart)

  const [checkoutToken, setCheckoutToken] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)

  const [shippingData, setShippingData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address1: "",
    zip: "",
    city: "",
  })

  const generateCheckoutToken = async () => {
    if (cart.id) {
      const token = await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      })
      setCheckoutToken(token)
    }
  }

  const nextStep = () => setCurrentStep(currentStep + 1)
  const prevStep = () => setCurrentStep(currentStep - 1)

  const captureOrder = async (stripe, elements) => {
    if (!stripe || !elements) return

    const cardElement = elements.getElement(CardElement)
    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card: cardElement })

    if (error) {
      console.log("There was an error while creating stripe payment method")
      console.log(error)
      return
    }

    const newOrder = {
      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: shippingData.firstname,
        lastname: shippingData.lastname,
        email: shippingData.email,
      },
      shipping: {
        name: "International",
        street: shippingData.address1,
        town_city: shippingData.city,
        county_state: shippingData.subdivision,
        postal_zip_code: shippingData.zip,
        country: shippingData.country,
      },
      billing: {
        name: "International",
        street: shippingData.address1,
        town_city: shippingData.city,
        county_state: shippingData.subdivision,
        postal_zip_code: shippingData.zip,
        country: shippingData.country,
      },
      fulfillment: {
        shipping_method: shippingData.shippingOption,
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: "4242 4242 4242 4242",
          expiry_month: "01",
          expiry_year: "2023",
          cvc: "123",
          postal_zip_code: "94103",
        },

        stripe: {
          payment_method_id: paymentMethod.id,
        },
      },
    }

    try {
      const order = await commerce.checkout.capture(checkoutToken.id, newOrder)
      alert("Order placed")
    } catch (error) {
      console.log("There was an error capturing order.")
      console.log(error)
    }
  }

  // Side Effects
  useEffect(() => {
    generateCheckoutToken()
  }, [cart])

  return (
    <div className={"container mx-auto my-4"}>

      <div className={"lg:w-6/12 w-full mx-auto space-y-6"}>
        <h2 className={"title text-center"}>Checkout</h2>

        <Stepper alternativeLabel activeStep={currentStep} >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {currentStep === 0 && (
          <AddressForm
            checkoutToken={checkoutToken}
            nextStep={nextStep}
            passData={setShippingData}
            formValues={shippingData}
          />
        )}

        {currentStep === 1 && (
          <>
            <Summary checkoutToken={checkoutToken} />
            <PaymentForm
              checkoutToken={checkoutToken}
              nextStep={nextStep}
              prevStep={prevStep}
              captureOrder={captureOrder}
            />
          </>
        )}
        {currentStep === 2 && <Confirmation />}
      </div>
    
    </div>
  )
}

export default Checkout
