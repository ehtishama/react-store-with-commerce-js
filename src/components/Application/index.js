import React, {useEffect} from "react";
import Header from "../Header";
import ProductsListings from "../ProductsListing";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import ProductDetails from "../ProductDetails";
import {addProducts} from "../../redux/reducers/productReducer";
import {useDispatch} from "react-redux";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import {commerce} from "../../lib/commerce";
import { setCart } from "../../redux/reducers/cartReducer";

export default function Application() {

    const dispatch = useDispatch()

    const getProducts = async () => {
        const {data} = await commerce.products.list()
        dispatch(addProducts(data))
    }

    const getCart = async () => {
        const cart = await commerce.cart.retrieve()
        dispatch(setCart(cart))
    }

    // get cart(async api calls) -> add to state(dispatch) ✅
    // add/remove/update cart -> get cart(async api call) -> add to state(dispatch)
    // 

    useEffect(() => {
        
        getProducts()
        getCart()

    }, [])

    return <Router>
        <Header/>

        <Switch>
            <Route exact={true} path={"/"}>
                <ProductsListings/>
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

    </Router>
}