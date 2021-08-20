import React from 'react'
import Product from '../Product'
import {useSelector} from "react-redux";


function ProductsListings() {
    const products = useSelector(state => state.products )
    return (
        <div className="container mx-auto flex flex-wrap justify-between" >
            {products.map(product => <Product {...product} />)}
        </div>
    )
}

export default ProductsListings
