// action types
export const ADD_PRODUCTS = "ADD_PRODUCTS"
export const  SELECT_PRODUCT = "SELECT_PRODUCT"

// action creators
export const addProducts = (products) => ({
    type: ADD_PRODUCTS,
    payload: products
})

export const selectProduct = (product) => ({
    type: SELECT_PRODUCT,
    payload: product
})

// initial state
const initialState = []

// reducer
export default function productReducer(state = initialState, action) {
    if(action.type === ADD_PRODUCTS) {
        return [...state, ...action.payload]
    }
    return state
}
