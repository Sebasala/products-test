import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, CardText} from 'react-md';

const Product = (props) => {
    let categories = props.categories.join(", ");
    let brand = props.brand;
    let subtitle = [categories, brand].join(" - ");

    return ( 
        <li className="product">
            <Card>
                <CardTitle className="product__header" title={props.name} subtitle={subtitle} />
                <div className="product__container">
                    <figure className="product__figure">
                        <img className="product__img" src={props.img} alt="Product"/>
                    </figure>
                    <div className="product__info">
                        <CardText>
                            <p className="product__description">{props.description}</p>
                            <p className="product__stock"><strong>Stock: </strong>{props.stock}</p>
                            <p className="product__price"><strong>Price: </strong>${props.price}</p>
                        </CardText>
                    </div>
                </div>
            </Card>
        </li>
     );
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    brand: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired
}
 
export default Product;