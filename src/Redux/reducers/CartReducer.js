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

            const newItem ={
                productId: action.id,
                name: action.name,
                cartId: state.cart.length+1
            };

            return {
                ...state,
                cart: [
                    ...state.cart,
                    newItem
        
                ],
            }
        case REMOVE_From_CART:
            console.log(action);
            
            const cartId = action.cartId
            const remaingCart = state.cart.filter(item => item.cartId !== cartId)
            return {
                ...state,
                cart: remaingCart,
            }
        default:
            return state;
    }
}
export default CartReducer;