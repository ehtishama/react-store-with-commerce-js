import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react-is";
import { useSelector } from "react-redux";
import { commerce } from "../../lib/commerce"

const Checkout = () => {

    const cart = useSelector(state => state.cart)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('')

    
    const generateCheckoutToken = async () => {
        if (cart.id)
        {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
            setCheckoutToken(token)
        }
    }

    const getShippingCountries = async () => {
        let { countries, html } = await commerce.services.localeListShippingCountries(checkoutToken.id)
        countries = Object.keys(countries).map(key => ({key, name: countries[key]}))
        setCountries(countries)
    }

    useEffect(() => {
        generateCheckoutToken()
    }, [cart])

    useEffect(() => {

        if (!checkoutToken) return

        getShippingCountries()

    }, [checkoutToken])

    // list of countries
    // selected country




    return <div className={"container mx-auto mt-4"}>
        <div className={"mx-auto md:w-10/12 lg:w-6/12 px-1"}>
            <h2 className={"text-2xl text-gray-700 font-semibold text-center"}>Checkout</h2>

            {/*Shipping Address Form*/}
            <form action="" className={"mt-4"}>

                <h2 className={"text-lg text-gray-700 font-semibold"}>Shipping Address</h2>

                <div className="flex gap-x-2 mt-4 mb-1">
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"First Name"}/>
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"Last Name"}/>
                </div>

                <div className="flex gap-x-2 mb-1">
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"Address"}/>
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"City"}/>
                </div>

                <div className="flex gap-x-2 mb-1">
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"Zip/Postal Code"}/>
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"City"}/>
                </div>

                <div className="flex gap-x-2 mb-1">
                    
                    <select name="country" id="countries" className={"p-2 border rounded block w-full"} value="shippnig_country" onChange={() => {}}>

                        <option value="shipping_country">Shipping Country</option>
                        {countries.map(country => <option key={country.key}>{country.name}</option>)}
                        
                        
                    </select>
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"Shipping Subdivision"}/>
                </div>

                <div className="flex gap-x-2 mb-1">
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"Shipping Options"}/>
                </div>

            </form>

            <div className={"border border-bottom border-gray-600 rounded my-4"}/>
            {/*Payment Form*/}
            <form action="" className={"mt-4"}>

                <h2 className={"text-lg text-gray-700 font-semibold"}>Payment details</h2>

                <div className="flex gap-x-2 mt-4 mb-1">
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"First Name"}/>
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"Last Name"}/>
                </div>

                <div className="flex gap-x-2 mb-1">
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"Address"}/>
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"City"}/>
                </div>

                <div className="flex gap-x-2 mb-1">
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"Zip/Postal Code"}/>
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"City"}/>
                </div>

                <div className="flex gap-x-2 mb-1">
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"Shipping Country"}/>
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"Shipping Subdivision"}/>
                </div>

                <div className="flex gap-x-2 mb-1">
                    <input type="text" className={"p-2 border rounded block w-full"} placeholder={"Shipping Options"}/>
                </div>

            </form>

        </div>
    </div>
}

export default Checkout;