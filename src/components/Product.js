import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, CardText} from 'react-md';

const Product = (props) => {
    let categories = props.categories.join(", ");
    let brand = props.brand;
    let subtitle = [categories, brand].join(" - ");

    return ( 
        <li className="Product">
            <Card>
                <CardTitle title={props.name} subtitle={subtitle} />
            </Card>
        </li>
     );
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    brand: PropTypes.string.isRequired
}
 
export default Product;