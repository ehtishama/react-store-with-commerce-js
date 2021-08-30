import React from "react"
import ReactDOM from "react-dom"
import Application from "./components/Application"
import {store} from "./redux/store";
import { Provider } from "react-redux";
import "./index.css"

ReactDOM.render(
    <Provider store={store}>
        <Application/>
    </Provider>,
    document.getElementById("root"))
