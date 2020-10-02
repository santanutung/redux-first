const { ADD_TO_CART, REMOVE_From_CART } = require("../actions/CartAction");

const initialState = {
    cart: [],
    product: [
        { name: 'lanovo laptop', id: 1 },
        { name: 'asush laptop', id: 2 },
        { name: 'hp laptop', id: 3 },
        { name: 'Tosiva laptop', id: 4 },
        { name: 'Dell laptop', id: 5 },
    ]
}
const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action);

            return {
                ...state,
                cart: [...state.cart, action.id],
            }
        case REMOVE_From_CART:
            const id = action.id
            const remaingCart = state.cart.filter(item => item !== id)
            return {
                ...state,
                cart: remaingCart,
            }
        default:
            return state;
    }
}
export default CartReducer;