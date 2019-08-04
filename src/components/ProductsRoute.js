import React, { Component } from 'react';
import productsData from '../data/products';
import { Route, Switch } from 'react-router-dom';

import Products from './Products';
import ProductsCategory from './ProductsCategory';

class ProductsRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.setState({
      products: productsData
    })
  }

  render() { 
    return ( 
        <Switch>
          <Route 
            path={`${this.props.match.path}/:category`} 
            render={(props) => <ProductsCategory {...props} products={this.state.products} />} 
          />
          <Route 
            exact path={this.props.match.path}
            render={() => <Products products={this.state.products} category="All" />}
          />
        </Switch>
     );
  }
}
 
export default ProductsRoute;