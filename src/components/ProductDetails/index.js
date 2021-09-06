import { Rating } from "@material-ui/lab"
import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

function ProductDetails() {
  const { productId } = useParams()
  const product = useSelector((state) => state.products.find((product) => product.id === productId))

  if (!product) return "Loading...."

  const { media, name, price, description } = product || {}

  return (
    <div className="max-w-screen-lg mx-auto border-l border-r">
      <div className="flex">
        <div className="md:w-1/2 p-4">
          <div className={"p-4 h-80 bg-white"}>
            <img src={media.source} className={"w-full h-full object-contain"} alt={""} />
          </div>
        </div>
        <div className="md:w-1/2 p-4 space-y-3">
          <h1 className={"title"}>{name}</h1>
          <h2 className={"sub-title font-regular"}>{price.formatted_with_symbol}</h2>
          <Rating />
          <p className={"text-gray-600 text-justify"} dangerouslySetInnerHTML={{ __html: description }} />
          <div className={"flex gap-2"}>
            <button className={"btn btn-indigo"}>Add to cart</button>

            <button className={"btn btn-indigo bg-indigo-200 text-indigo-700 font-medium focus:text-white"}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
