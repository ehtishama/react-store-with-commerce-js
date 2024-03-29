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
        <div className={"max-w-screen-md p-4 mx-auto space-y-6 mt-4"}>
            <h2 className={"title mb-8"}>Your Shopping Cart</h2>

            <div className="mt-4">
                {line_items.map(item => <CartItem key={item.id} {...item}/>)}
            </div>

            <div className={"mt-4 flex justify-end"}>
                <Link to={"/checkout"}>
                    <button
                        className={"btn btn-indigo flex gap-1"}>
                        <h4 className={"tracking-wide"}>Checkout</h4>
                        <BsArrowRight size={24} className="relative hover:left-2"/>
                    </button>
                </Link>
            </div>
        </div>
    );

}

export default Cart;