
import { CartActionTypes } from "./cart.actiontype"
import { addItemToCart, RemoveItemFromCart } from "./cart.Utils"
const INITIAL_STATE={
    cartItems:[],
}
const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case CartActionTypes.CART_ADD_ITEM:
           return {
            ...state,
            cartItems:addItemToCart(state.cartItems,action.payload)
           } 
        case CartActionTypes.CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems:RemoveItemFromCart(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}
export {cartReducer};