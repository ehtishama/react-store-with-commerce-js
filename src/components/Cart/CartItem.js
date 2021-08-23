import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, changeQuantity, setCart } from "../../redux/reducers/cartReducer";
import { commerce } from "../../lib/commerce"


const CartItem = ({ id, product_id, name, media, price, quantity }) => {
    const dispatch = useDispatch()
    const onQuantityChange = async (newQuantity) => {

        try {
            const {cart} = await commerce.cart.update(id, {
                quantity: newQuantity
            })
            dispatch( setCart(cart) )
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
        <div className={"px-4 border p-2 flex items-center mb-1 rounded"}>
            <div className={"h-20 w-20 overflow-hidden rounded mr-4"}>
                <img src={media.source} alt={name} className={"h-full w-full object-contain"}/>
            </div>

            <h4 className={"flex-grow font-semibold text-gray-600 px-2"}>{name}</h4>

            <div className={"flex items-center mr-4"}>
                <button className={"px-4 py-2 bg-gray-200 rounded mx-2 hover:bg-gray-300"}
                onClick={() => onQuantityChange(quantity - 1) }
                >-</button>
                <p className={"font-semibold"}>
                    {quantity}
                </p>
                <button className={"px-4 py-2 bg-gray-200 rounded mx-2 hover:bg-gray-300"}
                onClick={() => onQuantityChange(quantity + 1) }
                >+</button>
            </div>

            <div>
                <button className={"bg-red-400 text-white rounded px-3 py-2 font-semibold hover:bg-red-500"}
                onClick={() => handleRemoveClick() }
                >Remove</button>
            </div>
        </div>
    )

}

export default CartItem;