import React from "react"
import Product from "../Product"
import { useSelector } from "react-redux"
import Filters from "./Filters/Filters"
import { Pagination } from "@material-ui/lab"
import { useState } from "react"
import ProductLoader from "./ProductLoader/ProductLoader"

function ProductsListings() {

  let products = useSelector((state) => state.products)
  const searchResults = useSelector((state) => state.searchResults)

  const [page, setPage] = useState(1)
  const handlePageChange = (e, value) => {
    setPage(value)
    console.log(value)
  }

  const sortByPrice = (x) => {
    // products = useSelector((state) => state.products)
      // (first, second) => first.price.raw > second.price.raw)
  }

  return (
    <>
      {products.length === 0 && (
        <div className="container mx-auto flex">
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
        </div>
      )}

      {products.length !== 0 && (
        <div className="container mx-auto flex mb-16">
          <div className="md:w-3/12">
            <Filters />
          </div>

          <div className="md:w-9/12 mx-auto space-y-6">
            <div className="flex flex-wrap justify-between">

              {searchResults.length > 0 && searchResults.map((product) => <Product key={product.id} product={product} />)}
              {!searchResults.length && products.map((product) => <Product key={product.id} product={product} />)}

            </div>

            <div className="flex justify-end">
              <Pagination
                count={10}
                page={page}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
                size="large"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductsListings
