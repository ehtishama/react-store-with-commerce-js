import React, {useEffect} from 'react'
import Product from '../Product'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addProducts} from "../../redux/reducers/productReducer";

function ProductsListings() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products )
    const sampleProduct = {id: 2, price: 200, title: "Product 1", category: "Fashion", image: "https://source.unsplash.com/random"}

    return (
        <div className="ui container grid" >
            {products.map(product => <Product {...product} />)}
        </div>
    )
}

export default ProductsListings
