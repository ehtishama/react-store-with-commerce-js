import React from 'react'
import {Link} from "react-router-dom";

function Product({id, title, price, category, image}) {
    return (
        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-2" key={id}>
            <div className={"border rounded hover:shadow"}>
            <Link to={`/product-details/${id}`}>
                <div className="h-72 p-4">
                    <img src={image} alt={title} className={"w-full h-full object-contain"}/>
                </div>
                <div className="p-4">
                    <div className="font-semibold text-gray-600 h-6 overflow-hidden">{title}</div>
                    <div className="text-gray-500">$ {price}</div>
                    <div className="text-gray-500">{category}</div>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Product
