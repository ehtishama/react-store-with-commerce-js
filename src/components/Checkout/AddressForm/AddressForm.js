import { Field, Form, Formik } from "formik"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { commerce } from "../../../lib/commerce"

const AddressForm = ({ checkoutToken, nextStep, passData, formValues }) => {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState("")

    const [subdivisions, setSubdivisions] = useState([])
    const [subdivision, setSubdivision] = useState("")

    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState("")

    const getSubdivisions = async (country) => {
        let { subdivisions } = await commerce.services.localeListSubdivisions(country)
        subdivisions = Object.keys(subdivisions).map((key) => ({
            key,
            name: subdivisions[key],
        }))
        setSubdivisions(subdivisions)
    }

    useEffect(() => {
        if (!checkoutToken) return
        const getShippingCountries = async () => {
            let { countries } = await commerce.services.localeListShippingCountries(checkoutToken.id)
            countries = Object.keys(countries).map((key) => ({
                key,
                name: countries[key],
            }))
            setCountries(countries)
        }
        getShippingCountries()
    }, [checkoutToken])

    useEffect(() => {
        if (!subdivision) return

        const getShippingOptions = async (country, subdivision = null) => {
            const shippingOptions = await commerce.checkout.getShippingOptions(checkoutToken.id, {
                country,
                region: subdivision,
            })
            setShippingOptions(shippingOptions)
        }

        getShippingOptions(country, subdivision)
    }, [subdivision, country, checkoutToken.id])

    // Handlers
    const onCountryChange = (e) => {
        const newCountry = e.target.value
        setCountry(newCountry)
        getSubdivisions(newCountry) // fetch subdivisions for the now selected country
    }

    const onChangeSubdivision = (e) => {
        const newSubdivision = e.target.value
        setSubdivision(newSubdivision)
    }

    const onChangeShippingOption = (e) => {
        const newOption = e.target.value
        setShippingOption(newOption)
    }

    const handleFormSubmit = (values) => {
        const data = { ...values, country, shippingOption, subdivision }
        passData(data)
        nextStep()
    }

    return (
        <div>
            <Formik initialValues={formValues} onSubmit={handleFormSubmit}>
                {() => (
                    <Form>
                        <div className="md:flex gap-x-2 mt-4 mb-1">
                            <Field
                                type="text"
                                name="firstname"
                                className={"input-field"}
                                placeholder={"First Name"}
                                required
                            />

                            <Field
                                type="text"
                                name="lastname"
                                className={"input-field"}
                                placeholder={"Last Name"}
                                required
                            />
                        </div>
                        <div className="md:flex gap-x-2 mb-1">
                            <Field
                                type="email"
                                name="email"
                                className={"input-field"}
                                placeholder={"Address"}
                                required
                            />
                            <Field
                                type="text"
                                name="address1"
                                className={"input-field"}
                                placeholder={"Address"}
                                required
                            />
                        </div>
                        <div className="md:flex gap-x-2 mb-1">
                            <Field
                                type="text"
                                name="zip"
                                className={"input-field"}
                                placeholder={"Zip/Postal Code"}
                                required
                            />
                            <Field type="text" name="city" className={"input-field"} placeholder={"City"} required />
                        </div>
                        <div className="md:flex gap-x-2 mb-1">
                            <select
                                name="country"
                                id="countries"
                                className={"input-field"}
                                value={country}
                                onChange={onCountryChange}>
                                <option value="">Shipping Country</option>
                                {countries.map((country) => (
                                    <option key={country.key} value={country.key}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>

                            <select
                                name="subdivision"
                                id="countries"
                                className={"input-field"}
                                value={subdivision}
                                onChange={onChangeSubdivision}>
                                <option value="">Shipping Subdivision</option>
                                {subdivisions.map((subdivision) => (
                                    <option key={subdivision.key} value={subdivision.key}>
                                        {subdivision.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="md:flex gap-x-2 mb-1">
                            <select
                                name="shippingOption"
                                id="countries"
                                className={"input-field"}
                                value={shippingOption}
                                onChange={onChangeShippingOption}>
                                <option value="">Shipping Options</option>
                                {shippingOptions.map((shippingOption) => (
                                    <option key={shippingOption.id} value={shippingOption.id}>
                                        {shippingOption.price.formatted_with_symbol}

                                        {shippingOption.description}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-end">
                            <button className={"btn btn-indigo px-8 w-full py-3 font-medium mt-2"} type="submit">
                                Next
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddressForm
