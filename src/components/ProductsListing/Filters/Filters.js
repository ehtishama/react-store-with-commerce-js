import { Checkbox, Slider } from "@material-ui/core"
import React, { useState } from "react"
import SortByFilter from "./SortByFilter/SortByFilter"

const Filters = () => {
  const [priceRange, setPriceRange] = useState([20, 370])
  const [minPrice, maxPrice] = priceRange

  const handlePriceSliderChange = (e, value) => {
    setPriceRange(value)
  }

  const handlePriceInputChange = (type, value) => {
    if (type == "min") {
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

  return (
    <div className="border rounded m-2 p-4 space-y-8">
      <SortByFilter />

      <div className="">
        <h4 className="title text-lg text-indigo-600 font-medium mb-2">Price Range</h4>
        <Slider
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          value={priceRange}
          onChange={handlePriceSliderChange}
          max={1000}
        />

        <div className="flex items-center">
          <span className="h-full block py-2 px-4 mb-1 font-medium bg-gray-200 text-lg border rounded-tl rounded-bl">
            $
          </span>
          <input
            type="number"
            className="input-field p-2 rounded-tl-none rounded-bl-none"
            placeholder="min"
            onChange={handleMinInputChange}
            value={minPrice}
            step={10}
          />
        </div>

        <div className={"flex items-center"}>
          <span className="h-full block py-2 px-4 mb-1 font-medium bg-gray-200 text-lg border rounded-tl rounded-bl">
            $
          </span>
          <input
            type="number"
            className="input-field p-2 rounded-tl-none rounded-bl-none"
            placeholder="max"
            onChange={handleMaxInputChange}
            value={maxPrice}
            step={10}
          />
        </div>

        <input type="submit" className="btn btn-indigo w-full mt-4" value="Apply" />
      </div>

      <div>
        <h4 className="title text-lg text-indigo-600 font-medium mb-2">Categories</h4>

        <div className="flex gap-2 items-center">
          <Checkbox id={"category1"} color={"primary"} />
          <label htmlFor="category1" className="select-none cursor-pointer font-medium text-gray-700">
            Category 1
          </label>
        </div>
      </div>
    
    </div>
  )
}

export default Filters
