export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_From_CART = 'REMOVE_From_CART';


export const addToCart = (id) => {
    return { type: ADD_TO_CART, id }
}

export const RemoveFromCart = (id) => {
    return { type: REMOVE_From_CART, id }
}
