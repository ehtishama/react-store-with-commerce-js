import {combineReducers, createStore} from "redux";
import productReducer from "./reducers/productReducer";

const reducers = combineReducers({
    products: productReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())