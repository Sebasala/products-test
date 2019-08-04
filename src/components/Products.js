import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const Products = (props) => {
    return ( 
        <ul className="products">
            {props.products.map(product => {
                return (
                    <Product 
                        name={product.name}
                        categories={product.categories}
                        brand={product.brand}
                        img={product.photo}
                        description={product.description}
                        stock={product.stock}
                        price={product.price}
                    />
                )
            })}
        </ul>
    );
}

Products.propTypes = {
    products: PropTypes.array.isRequired
}
 
export default Products;