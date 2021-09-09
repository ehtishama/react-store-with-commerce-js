import React, { useState } from "react"
import { Slider } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { addSearchResults } from "../../../../redux/reducers/searchReducer"

const PriceRangeFilter = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.products)
    const [priceRange, setPriceRange] = useState([100, 500])
    const [minPrice, maxPrice] = priceRange

    const handlePriceSliderChange = (e, value) => {
        setPriceRange(value)
    }

    const handlePriceInputChange = (type, value) => {
        if (type === "min") {
            const maxPrice = priceRange[1]
            setPriceRange([value, maxPrice])
        } else {
            const minPrice = priceRange[0]
            setPriceRange([minPrice, value])
        }
    }

    const handleMaxInputChange = (e) => {
        handlePriceInputChange("max", e.target.value)
    }

    const handleMinInputChange = (e) => {
        handlePriceInputChange("min", e.target.value)
    }

    const applyPriceRange = () => {
        const result = products.filter((product) => {
            const productPrice = product.price.raw
            return productPrice >= minPrice && productPrice <= maxPrice
        })

        dispatch(addSearchResults(result))
    }

    return (
        <div className="">
            <h4 className="title text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-2">Price Range</h4>
            <Slider
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                value={priceRange}
                onChange={handlePriceSliderChange}
                max={1000}
            />

            <div className="flex items-center">
                <span className="h-full block py-2 px-4 mb-1 font-medium bg-gray-200 text-lg border rounded-tl rounded-bl dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 ">
                    $
                </span>
                <input
                    type="number"
                    className="input-field p-2 rounded-tl-none rounded-bl-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                    placeholder="min"
                    onChange={handleMinInputChange}
                    value={minPrice}
                    step={10}
                />
            </div>

            <div className={"flex items-center"}>
                <span className="h-full block py-2 px-4 mb-1 font-medium bg-gray-200 text-lg border rounded-tl rounded-bl dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 ">
                    $
                </span>
                <input
                    type="number"
                    className="input-field p-2 rounded-tl-none rounded-bl-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                    placeholder="max"
                    onChange={handleMaxInputChange}
                    value={maxPrice}
                    step={10}
                />
            </div>

            <button className="btn btn-indigo w-full mt-4" onClick={applyPriceRange}>
                Apply
            </button>
        </div>
    )
}

export default PriceRangeFilter
