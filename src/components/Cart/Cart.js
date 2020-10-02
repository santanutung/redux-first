import React from 'react';
import { connect } from 'react-redux';
import { RemoveFromCart } from '../../Redux/actions/CartAction';

const Cart = (props) => {
    console.log(props);

    const { cart, RemoveFromCart } = props

    return (
        <div className="cart col-md-4">
            <h4>cart {
                cart.length
            }</h4>
           <ul>
                {
                    cart.map(cart => <li key={cart.cartId} > {cart.name}<button onClick={() => RemoveFromCart(cart.cartId)}>X</button></li>) 
            }
           </ul>

        </div>
    );
};
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    RemoveFromCart: RemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);