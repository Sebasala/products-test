import React, { Component } from 'react';
import productsData from '../data/products';
import { Route, Switch, NavLink } from 'react-router-dom';

import Products from './Products';
import ProductsCategory from './ProductsCategory';
import { Drawer, Divider, FontIcon, Toolbar } from 'react-md';

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
      <li><NavLink exact to="/products"><FontIcon>list</FontIcon> All</NavLink></li>,
      <li className="md-list__divider-container"><Divider /></li>,
      <li><NavLink to="/products/tech"><FontIcon>computer</FontIcon> Tech</NavLink></li>,
      <li><NavLink to="/products/services"><FontIcon>build</FontIcon> Services</NavLink></li>,
      <li><NavLink to="/products/office"><FontIcon>folder</FontIcon> Office</NavLink></li>
    ]
    
    return (
      <div className="products-page">
        <Toolbar
          colored
          fixed
        />
        <Drawer className="md-toolbar-relative"
          navItems={navItems}
        />
        <div className="md-drawer-relative md-toolbar-relative">
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