import React from 'react'
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom"


function ProductDetails() {

    const {productId} = useParams()
    const product = useSelector(state => state.products.find(product => product.id == productId))
    
    if(!product) return "Loading...."

    const { media, name, price, description } = product || {}

    return (
        <div className="">
            <div className="flex">
                <div className="md:w-1/2 p-4">
                    <div className={"p-4 border h-80 bg-white"}>
                        <img src={media.source} className={"w-full h-full object-contain"}/>
                    </div>
                </div>
                <div className="md:w-1/2 p-4">
                    <h1 className={"text-gray-700 font-semibold text-lg"}>{name}</h1>
                    <h2 className={"mt-4"}>
                        <a className="ui teal tag label">{price.formatted_with_symbol}</a>
                    </h2>
                    <h3 className="ui brown block header">{}</h3>
                    <p className={"mb-4"} dangerouslySetInnerHTML={{__html: description}} />
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
