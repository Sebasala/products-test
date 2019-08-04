import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const Products = (props) => {
    var filteredProducts;

    if (props.category === "All") {
        filteredProducts = props.products;
    } else {
        filteredProducts = props.products.filter(product => product.categories.includes(props.category));
    }

    var shown = filteredProducts.length;
    var hidden = props.products.length - shown;

    var shownSentence = <span>Showing <strong>{shown}</strong> products</span>;
    var hiddenSentence = props.category === "All" ? <span></span> : <span> - Hidden: <strong>{hidden}</strong></span>;

    return (
        <div className="products-container">
            <p className="products-container__p">{shownSentence} {hiddenSentence}</p>
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
        </div>
    );
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired
}
 
export default Products;