import React from 'react';

const Product = (props) => {



    return (
        <div style={{ border: '1px solid #ccc' }}>
            <h5>{props.product.name}</h5>
            <button>add to cart</button>
        </div>
    );
};

export default Product;