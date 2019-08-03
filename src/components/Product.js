import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
    return ( 
        <li className="Product">
            <h2>{props.name}</h2>
        </li>
     );
}

Product.propTypes = {
    name: PropTypes.string.isRequired
}
 
export default Product;