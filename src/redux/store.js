import {combineReducers, createStore} from "redux";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const reducers = combineReducers({
    products: productReducer,
    cart: cartReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())