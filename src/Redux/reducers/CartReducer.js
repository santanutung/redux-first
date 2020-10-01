const { ADD_TO_CART, REMOVE_TO_CART } = require("../actions/CartAction");

const initialState = {
    cart: [],
    product: []
}
const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [...state.cart, action.id]
            }
        case REMOVE_TO_CART:
            const id = action.id
            const remaingCart = state.cart.filter(item => item.id !== id)
            return {
                cart: remaingCart
            }
        default:
            return state;
    }
}
export default CartReducer;