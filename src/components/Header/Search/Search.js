import React from "react"
import { useState } from "react"
import { MdSearch } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { addSearchResults } from "../../../redux/reducers/searchReducer"

const Search = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const [query, setQuery] = useState("")

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (query === "") {
      dispatch(addSearchResults([]))
      return
    }

    const searchResults = products.filter((product) => {
      return product.name.includes(query)
    })

    dispatch(addSearchResults(searchResults))
  }

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center gap-1">
      <input
        type="text"
        placeholder={"What are you looking for?"}
        className={"input-field text-sm p-2 bg-gray-100 border-indigo-600 text-indigo-600 md:w-72 w-full m-0"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className={"btn btn-indigo py-2 px-4"}>
        <MdSearch size={22} />
      </button>
    </form>
  )
}

export default Search
