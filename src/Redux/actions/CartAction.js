export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_From_CART = 'REMOVE_From_CART';


export const addToCart = (id,name) => {

    return { type: ADD_TO_CART, id, name };
}

export const RemoveFromCart = (cartId) => {
    return { type: REMOVE_From_CART, cartId }
}
