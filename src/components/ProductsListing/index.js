import React from 'react'
import Product from '../Product'
import {useSelector} from "react-redux";


function ProductsListings() {
    const products = useSelector(state => state.products )
    return (
        <div className="container mx-auto flex flex-wrap justify-center" >
            {products.map(product => <Product key={product.id} product={product} />)}
        </div>
    )
}

export default ProductsListings
