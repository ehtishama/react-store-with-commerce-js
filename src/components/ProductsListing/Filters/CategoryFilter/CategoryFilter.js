import React from "react"
import { useEffect, useState } from "react"
import { commerce } from "../../../../lib/commerce"
import { Checkbox } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { addSearchResults } from "../../../../redux/reducers/searchReducer"
import { useRef } from "react"

const CategoryFilter = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.products)
    const [categories, setCategories] = useState([])
    let selectedCategories = useRef([])

    const getCategories = async () => {
        const { data } = await commerce.categories.list()
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

	const handleCategorySelect = (e, selected) => {
        const categoryId = e.target.value
        if (selected) selectedCategories.current.push(categoryId)
        else selectedCategories.current = selectedCategories.current.filter((selectedCategory) => selectedCategory !== categoryId)


        if (selectedCategories.current.length === 0) {
            dispatch(addSearchResults([]))
        }
		const result = products.filter((product) => {
		
            const productCategories = product.categories.map((category) => category.id)
            
            return selectedCategories.current.some((sC) => productCategories.includes(sC))
        })

        dispatch(addSearchResults(result))
    }

    return (
        <div>
            <h4 className="title text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-2">Categories</h4>

            {categories.map((category) => (
                <div className="flex gap-2 items-center" key={category.id}>
                    <Checkbox id={category.id} value={category.id} color={"primary"} onChange={handleCategorySelect} />
                    <label htmlFor={category.id} className="select-none cursor-pointer font-medium text-gray-700 dark:text-gray-200">
                        {category.name}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default CategoryFilter
