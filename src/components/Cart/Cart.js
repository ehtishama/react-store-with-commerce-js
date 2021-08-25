import React from "react";
import CartItem from "./CartItem";
import {BsArrowRight} from "react-icons/bs"
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const { line_items } = cart
    
    if (!line_items)
        return "Loading ..."

    return (
        <div className={"container mx-auto mt-4 w-full sm:w-8/12 md:w-6/12 lg:w-6/12"}>
            <h2 className={"text-2xl text-gray-700 font-medium"}>Your Shopping Cart</h2>

            <div className="mt-4">
                {line_items.map(item => <CartItem key={item.id} {...item}/>)}
            </div>

            <div className={"mt-4 flex justify-end"}>
                <Link to={"/checkout"}>
                    <button
                        className={"flex items-center px-4 py-3 rounded bg-purple-500 text-white font-medium hover:bg-purple-600"}>
                        <h4 className={"mr-3 tracking-wide"}>Checkout</h4>
                        <BsArrowRight size={24}/>
                    </button>
                </Link>
            </div>
        </div>
    );

}

export default Cart;