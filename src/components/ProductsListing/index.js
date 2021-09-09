import React, { useEffect } from "react"
import Product from "../Product"
import { useDispatch, useSelector } from "react-redux"
import Filters from "./Filters/Filters"
import { Pagination } from "@material-ui/lab"
import { useState } from "react"
import ProductLoader from "./ProductLoader/ProductLoader"
import { commerce } from "../../lib/commerce"
import { addProducts } from "../../redux/reducers/productReducer"
import { Fade } from "react-awesome-reveal"

function ProductsListings() {
    let products = useSelector((state) => state.products)
    const searchResults = useSelector((state) => state.searchResults)
    const [pagination, setPagination] = useState({ current_page: 1, total_pages: 1 })
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const handlePageChange = (e, value) => {
        setPagination({ ...pagination, current_page: value })
    }

    useEffect(() => {
        const getProducts = async (limit, pageNo) => {
            setLoading(true)
            const { data, meta } = await commerce.products.list({
                limit,
                page: pageNo,
                sortBy: "created_at",
                sortDirection: "desc",
            })
            dispatch(addProducts(data))
            setPagination(meta.pagination)
        }

        getProducts(9, pagination.current_page).then(() => setLoading(false))
    }, [pagination.current_page, dispatch])

    return (
        <>
            <div className="container mx-auto flex flex-wrap mb-16">
                <div className="lg:w-3/12 md:w-4/12 w-full order-2 md:order-1">
                    <Filters />
                </div>

                {products.length !== 0 && !loading && (
                    <div className="lg:w-9/12 md:w-8/12 mx-auto space-y-6 order-1">
                            <Fade direction="up" triggerOnce cascade>
                            <div className="flex flex-wrap justify-start">
                                {searchResults.length > 0 &&
                                    searchResults.map((product) => <Product key={product.id} product={product} />)}
                                {!searchResults.length &&
                                    products.map((product) => <Product key={product.id} product={product} />)}
                            </div>

                            <div className="flex justify-end">
                                <Pagination
                                    count={pagination.total_pages}
                                    page={pagination.current_page}
                                    onChange={handlePageChange}
                                    variant="outlined"
                                    shape="rounded"
                                    size="large"
                                />
                            </div>
                    </Fade>
                        </div>
                )}

                {(products.length === 0 || loading) && <ListingLoader />}
            </div>
        </>
    )
}

const ListingLoader = () => (
    <div className="lg:w-9/12 md:w-8/12 mx-auto flex flex-wrap order-1">
        <ProductLoader />
        <ProductLoader />
        <ProductLoader />

        <ProductLoader />
        <ProductLoader />
        <ProductLoader />

        <ProductLoader />
        <ProductLoader />
        <ProductLoader />
    </div>
)

export default ProductsListings
