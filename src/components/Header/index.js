import React from "react";
import {Link} from "react-router-dom";
import {MdShoppingCart} from "react-icons/md"
import {useSelector} from "react-redux"
import Search from "./Search/Search";
import logo from '../../assets/logo_temp_2.png'

export default function Header() {

    const cartItemCount = useSelector(state => state.cart.total_unique_items)

    return (
        <header className="bg-white dark:bg-gray-800 dark:border-gray-600 border-b mb-8">
            <div className="container mx-auto p-4 flex items-center gap-2 justify-between">
                <Link to={"/"}>
                    <img src={logo} alt="Logo" className="w-28"/>
                </Link>

                <div>
                    <Search />
                </div>

                <Link to={'/cart'} aria-label="Goto cart">
                    <div className={"text-gray-700 hover:bg-gray-200 p-2 rounded-full cursor-pointer relative"}>
                        <MdShoppingCart size={30} className="" />
                        <p
                            className={"w-5 h-5 rounded-full bg-red-500 text-white text-sm font-medium  absolute top-0 right-0 flex items-center justify-center"}>
                            {cartItemCount}
                        </p>
                    </div>
                </Link>
            </div>
        </header>
    );
}
