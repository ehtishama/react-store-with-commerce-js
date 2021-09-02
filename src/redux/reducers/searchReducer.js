// action types
export const ADD_SEARCH_RESULTS = "ADD_SEARCH_RESULTS"

// action creators
export const addSearchResults = (results) => ({
    type: ADD_SEARCH_RESULTS,
    payload: results,
})
  
const initialState = []

// reducer
export default function searchReducer(state = initialState, action) {

    if (action.type === ADD_SEARCH_RESULTS) {
        return action.payload
    }
    return state

}