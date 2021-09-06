import React from "react"
import ReactDOM from "react-dom"
import Application from "./components/Application"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Application />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)
