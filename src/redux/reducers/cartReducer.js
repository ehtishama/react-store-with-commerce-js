// action types
const SET_CART = "SET_CART"
const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const CHANGE_QUANTITY = "CHANGE_QUANTITY"

// action creators
export const addToCart = (productId, quantity) => ({
    type: ADD_TO_CART,
    payload: {
        productId,
        quantity
    }
})

export const changeQuantity = (productId, quantity) => ({
    type: CHANGE_QUANTITY,
    payload: {
        productId,
        quantity
    }
})

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: {
        productId
    }
})

export const setCart = (cart) => ({
    type: SET_CART,
    payload: {
        cart
    }
})

// initialState
const initialState = []

// reducer
const cartReducer = (state = initialState, action) => {

    if (action.type === ADD_TO_CART) {
        return [...state, {...action.payload}]
    }
    if (action.type === CHANGE_QUANTITY)
    {
        state.forEach(cartItem => {
            if (cartItem.productId === action.payload.productId)
                cartItem.quantity = action.payload.quantity
        })
        return [...state]
    }
    if (action.type === REMOVE_FROM_CART) {
        return state.filter(product => product.productId !== action.payload.productId)
    }
    if (action.type === SET_CART)
    {
        return action.payload.cart
    }
    
    return state
}

export default cartReducer