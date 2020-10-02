const { createStore } = require("redux");
const { default: CartReducer } = require("../reducers/CartReducer");


const Store = createStore(CartReducer);
export default Store
