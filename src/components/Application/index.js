import React, { useEffect } from "react"
import Header from "../Header"
import ProductsListings from "../ProductsListing"
import { Switch, Route, useLocation } from "react-router-dom"
import ProductDetails from "../ProductDetails"
import { addProducts } from "../../redux/reducers/productReducer"
import { useDispatch } from "react-redux"
import Cart from "../Cart/Cart"
import Checkout from "../Checkout/Checkout"
import { commerce } from "../../lib/commerce"
import { setCart } from "../../redux/reducers/cartReducer"

import "./index.css"

export function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export default function Application() {
    const dispatch = useDispatch()

    const getCart = async () => {
        const cart = await commerce.cart.retrieve()
        dispatch(setCart(cart))
    }

    useEffect(() => {
        getCart()
    }, [])

    return (
        <>
            <Header />

            <Switch>
                <Route exact={true} path={"/"}>
                    <ProductsListings />
                </Route>

                <Route exact={true} path={"/product-details/:productId"}>
                    <ProductDetails />
                </Route>

                <Route exact path={"/cart"}>
                    <Cart />
                </Route>

                <Route exact path={"/checkout"}>
                    <Checkout />
                </Route>
            </Switch>
        </>
    )
}
