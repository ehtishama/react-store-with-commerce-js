// action types
export const ADD_PRODUCTS = "ADD_PRODUCTS"
export const SELECT_PRODUCT = "SELECT_PRODUCT"
export const SORT_PRODUCTS = "SORT_PRODUCTS"

// action creators
export const addProducts = (products) => ({
  type: ADD_PRODUCTS,
  payload: products,
})

export const selectProduct = (product) => ({
  type: SELECT_PRODUCT,
  payload: product,
})

export const sortProducts = (by) => ({
  type: SORT_PRODUCTS,
  payload: by,
})

// initial state
const initialState = []

// reducer
export default function productReducer(state = initialState, action) {
  
  if (action.type === ADD_PRODUCTS) {
    // return [...state, ...action.payload]
    return [...action.payload]
  }

  if (action.type === SORT_PRODUCTS) {
    if (action.payload === "price_asc")
      return [...state.sort((first, second) => (first.price.raw >= second.price.raw ? 1 : -1))]
    else if (action.payload === "price_desc")
      return [...state.sort((first, second) => (first.price.raw <= second.price.raw ? 1 : -1))]
  }

  return state
}
