import React from "react"
import SortByFilter from "./SortByFilter/SortByFilter"
import CategoryFilter from "./CategoryFilter/CategoryFilter"
import PriceRangeFilter from "./PriceRangeFilter/PriceRangeFilter"
import Accordian from "../../Accordian/Accordian"

const Filters = () => {
    return (
        <div className="border rounded m-2 p-2 space-y-1 dark:bg-gray-800 dark:border-gray-600">
            <Accordian title="Sort By">
                <SortByFilter />
            </Accordian>

            <Accordian title="Price Range">
                <PriceRangeFilter />
            </Accordian>

            <Accordian title="Categories">
                <CategoryFilter />
            </Accordian>
        </div>
    )
}

export default Filters
