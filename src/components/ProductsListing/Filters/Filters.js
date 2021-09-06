import React from "react"
import SortByFilter from "./SortByFilter/SortByFilter"
import CategoryFilter from "./CategoryFilter/CategoryFilter"
import PriceRangeFilter from "./PriceRangeFilter/PriceRangeFilter"

const Filters = () => {
    return (
        <div className="border rounded m-2 p-4 space-y-8">
            <SortByFilter />

            <PriceRangeFilter />

            <CategoryFilter />
        </div>
    )
}

export default Filters
