import React, { Component } from 'react';
import productsData from '../data/products';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Drawer, Divider, FontIcon, Toolbar } from 'react-md';

import Products from './Products';
import ProductsCategory from './ProductsCategory';
import MainNav from './MainNav';

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
      <li className="title-item"><span>Categories</span></li>,
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
          children={<MainNav />}
        />
        <Drawer className="md-toolbar-relative"
          navItems={navItems}
          autoclose={false}
          desktopMinWidth={768}
          mobileType={Drawer.DrawerTypes.TEMPORARY_MINI}
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