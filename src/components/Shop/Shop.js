import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/actions/CartAction';
import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props);
    const { product, addToCart } = props
    return (
        <div className='col-md-8'>
            <h4>shop</h4>
            { product.map(pd => <Product addToCart={addToCart} product={pd} key={pd.id}></Product>)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        product: state.product
    }
}
const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )
// connectToStore(Shop)


// connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Shop)


export default connect(mapStateToProps, mapDispatchToProps)(Shop);