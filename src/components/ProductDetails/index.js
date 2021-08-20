import React from 'react'
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom"


function ProductDetails() {

    const {productId} = useParams()
    console.log(useParams())

    const product = useSelector(state => state.products.find(product => product.id == productId))
    const {image, title, price, category, description} = product || {}

    return (
        <div className="">
            <div className="flex">
                <div className="md:w-1/2 p-4">
                    <div className={"p-4 border h-80 bg-white"}>
                        <img src={image} className={"w-full h-full object-contain"}/>
                    </div>
                </div>
                <div className="md:w-1/2 p-4">
                    <h1 className={"text-gray-700 font-semibold text-lg"}>{title}</h1>
                    <h2 className={"mt-4"}>
                        <a className="ui teal tag label">${price}</a>
                    </h2>
                    <h3 className="ui brown block header">{category}</h3>
                    <p className={"mb-4"}>{description}</p>
                    <div className="ui vertical animated button " tabIndex="0">
                        <div className="hidden content">
                            <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
