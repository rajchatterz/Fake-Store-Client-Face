import { ADD_TO_CART,REMOVE_FROM_CART } from "./constant";
const initialState = []
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
        case REMOVE_FROM_CART:
            return 
        default:
           return state
    }
}
export default reducer