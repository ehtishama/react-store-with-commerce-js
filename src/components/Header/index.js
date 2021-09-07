import React from "react";
import {Link} from "react-router-dom";
import {MdShoppingCart} from "react-icons/md"
import {useSelector} from "react-redux"
import Search from "./Search/Search";

export default function Header() {

    const cartItemCount = useSelector(state => state.cart.total_unique_items)

    return (
        <div className="bg-white border mb-8">
            <div className="container mx-auto py-4 flex items-center gap-2 justify-between">
                <Link to={"/"}>
                    <h2 className={"text-xl font-medium text-gray-800"}>
                        <span className={"text-blue-500"}>React</span>
                        <span className={"text-purple-700"}> Redux&nbsp;</span>
                        Shop
                    </h2>
                </Link>

                <div>
                    <Search />
                </div>

                <Link to={'/cart'}>
                    <div className={"text-gray-700 hover:bg-gray-200 p-2 rounded-full cursor-pointer relative"}>
                        <MdShoppingCart size={40} className="border rounded-full p-2 bg-gray-200"/>
                        <p
                            className={"w-5 h-5 rounded-full bg-red-500 text-white text-sm font-medium  absolute top-0 right-0 flex items-center justify-center"}>
                            {cartItemCount}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
