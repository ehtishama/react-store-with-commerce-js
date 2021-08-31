import React from "react"
import { useDispatch } from "react-redux"
import { commerce } from "../../lib/commerce"
import { MdDelete, MdAdd, MdRemove } from "react-icons/md"
import { setCart } from "../../redux/reducers/cartReducer"


const CartItem = ({ id, product_id, name, media, price, quantity }) => {
  const dispatch = useDispatch()
  const onQuantityChange = async (newQuantity) => {
    try {
      const { cart } = await commerce.cart.update(id, {
        quantity: newQuantity,
      })
      dispatch(setCart(cart))
    } catch (e) {
      console.log("There was an error, ", e)
    }
  }

  const handleRemoveClick = async (newQuantity) => {
    console.log("Removing")
    const { cart } = await commerce.cart.remove(id)
    dispatch(setCart(cart))
    console.log("Removed")
  }

  return (
    <div className={"px-4 border p-2 flex items-center mb-1 rounde"}>
      <div className={"h-20 w-20 overflow-hidden rounded mr-4"}>
        <img src={media.source} alt={name} className={"h-full w-full object-contain"} />
      </div>

      <h4 className={"flex-grow font-medium text-gray-600 px-2"}>{name}</h4>

      <div className={"flex items-center gap-x-2 mr-3"}>
        <button
          className={"btn rounded-full"}
          onClick={() => onQuantityChange(quantity - 1)}>
          <MdRemove />
        </button>
        <p className={"font-medium text-lg"}>{quantity}</p>
        <button
          className={"btn rounded-full"}
          onClick={() => onQuantityChange(quantity + 1)}>
          <MdAdd />
        </button>
      </div>

      <div>
        <button className={"btn btn-red rounded-full"} onClick={() => handleRemoveClick()}>
          <MdDelete size={18} />
        </button>
      </div>
    </div>
  )
}

export default CartItem
