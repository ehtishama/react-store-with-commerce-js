import React, {useEffect} from "react";
import Header from "../Header";
import ProductsListings from "../ProductsListing";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import ProductDetails from "../ProductDetails";
import axios from "axios";
import {addProducts} from "../../redux/reducers/productReducer";
import {useDispatch} from "react-redux";

export default function Application() {

    const dispatch = useDispatch()

    const getProducts = async () => {
        const products = await axios.get("https://fakestoreapi.com/products").then(resp => resp.data)
        dispatch(addProducts(products))
    }

    useEffect(() => {
        getProducts()
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

        </Switch>

    </Router>
}