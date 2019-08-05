import React, { Component } from 'react';
import productsData from '../data/products';
import { Route, Switch, NavLink } from 'react-router-dom';

import Products from './Products';
import ProductsCategory from './ProductsCategory';
import { Drawer, Divider } from 'react-md';

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
    let navItems = [
      <li><span>Categories</span></li>,
      <li><NavLink exact to="/products"><i className="material-icons">list</i> All</NavLink></li>,
      <li className="md-list__divider-container"><Divider /></li>,
      <li><NavLink to="/products/tech"><i className="material-icons">computer</i> Tech</NavLink></li>,
      <li><NavLink to="/products/services"><i className="material-icons">build</i> Services</NavLink></li>,
      <li><NavLink to="/products/office"><i className="material-icons">folder</i> Office</NavLink></li>
    ]
    
    return (
      <div className="products-page">
        <Drawer 
          navItems={navItems}
        />
        <div className="md-drawer-relative">
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
        </div>
        
      </div>
     );
  }
}
 
export default ProductsRoute;