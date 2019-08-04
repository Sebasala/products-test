import React from 'react';
import Products from './Products';

const ProductsCategory = ({ match, products }) => {
    let categoryMap = {
        tech: "Tech",
        services: "Services",
        office: "Office"
    }

    let category = categoryMap[match.params.category]

    return (
        <Products products={products} category={category} />
    );
}
 
export default ProductsCategory;