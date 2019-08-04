import React from 'react';
import Products from './Products';

const ProductsCategory = ({ match, products }) => {
    let categoryMap = {
        tech: "Tech",
        services: "Services",
        office: "Office"
    }

    let category = categoryMap[match.params.category]

    if (category) {
        return (
            <Products products={products} category={category} />
        );
    } else {
        return (
            <h1>Category not found</h1>
        )
    }
}
 
export default ProductsCategory;