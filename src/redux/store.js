import {combineReducers, createStore} from "redux";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import searchReducer from "./reducers/searchReducer";

const reducers = combineReducers({
    products: productReducer,
    cart: cartReducer,
    searchResults: searchReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())