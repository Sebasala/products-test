import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const Products = (props) => {
    let filteredProducts;

    if (props.category === "All") {
        filteredProducts = props.products;
    } else {
        filteredProducts = props.products.filter(product => product.categories.includes(props.category));
    }

    return ( 
        <ul className="products">
            {filteredProducts.map(product => {
                return (
                    <Product
                        key={product.id} 
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
    products: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired
}
 
export default Products;