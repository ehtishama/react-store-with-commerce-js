import React from "react"
import { Radio, RadioGroup } from "@material-ui/core"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sortProducts } from "../../../../redux/reducers/productReducer"
import { addSearchResults } from "../../../../redux/reducers/searchReducer"

const SortByFilter = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const [sortBy, setSortBy] = useState("")

    const handleSortByChange = (e) => {
        const sortOrder = e.target.value
		setSortBy(sortOrder)
		
        let sortedProducts = []
        if (sortOrder === "price_asc"){
			sortedProducts = [...products.sort((first, second) => (first.price.raw >= second.price.raw ? 1 : -1))]
			console.log("asc: ", sortOrder)
		}
        else if (sortOrder === "price_desc"){
			sortedProducts = [...products.sort((first, second) => (first.price.raw <= second.price.raw ? 1 : -1))]
			console.log("desc: ", sortOrder)
		}

        dispatch(addSearchResults(sortedProducts))

    }

    return (
        <div className="">
            <h4 className="title text-lg text-indigo-600 font-medium mb-2">Sort by</h4>

            <RadioGroup name="sort-by" value={sortBy} onChange={handleSortByChange}>
                <div className="flex gap-2 items-center">
                    <Radio id={"f_1"} value="price_desc" color="primary" />
                    <label htmlFor="f_1" className="select-none cursor-pointer font-medium text-gray-700">
                        Price: High to Low
                    </label>
                </div>

                <div className="flex gap-2 items-center">
                    <Radio id={"f_2"} value="price_asc" color="primary" />
                    <label htmlFor="f_2" className="select-none cursor-pointer font-medium text-gray-700">
                        Price: Low to High
                    </label>
                </div>
            </RadioGroup>
        </div>
    )
}

export default SortByFilter
