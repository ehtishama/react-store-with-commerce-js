import React from "react"
import { Link } from "react-router-dom"
import { MdShoppingCart } from "react-icons/md"
import { setCart } from "../../redux/reducers/cartReducer"
import { useDispatch } from "react-redux"
import { commerce } from "../../lib/commerce"
import { IconButton } from "@material-ui/core"
import { Rating } from "@material-ui/lab"

function Product({ product }) {
  const { id, name, description, media, price } = product

  const dispatch = useDispatch()

  const handleAddCartClick = async () => {
    const { cart } = await commerce.cart.add(id, 1)
    dispatch(setCart(cart))
  }

  return (
    <div className="md:w-1/3 sm:w-1/2 w-full p-2" key={id}>
      <div className={"border rounded hover:shadow"}>
        <Link to={`/product-details/${id}`}>
          <div className="h-72 p-4">
            <img src={media.source} alt={name} className={"w-full h-full object-contain"} />
          </div>
        </Link>
        <div className="p-4">
          <div className="text-gray-700 h-6 overflow-hidden">{name}</div>
          <Rating readOnly value={4.5}/>
          <div className="font-medium text-gray-800">{price.formatted_with_symbol}</div>
          <button className="btn btn-indigo-secondary w-full mt-4 font-medium" onClick={handleAddCartClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
