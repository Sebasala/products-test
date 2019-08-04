import React, { Component } from 'react';
import productsData from './data/products';

import Product from './components/Product';

class App extends Component {
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
        <ul className="products">
          <Product 
            name={this.state.products[0] ? this.state.products[0].name : ""}
            categories={this.state.products[0] ? this.state.products[0].categories : []}
            brand={this.state.products[0] ? this.state.products[0].brand : ""}
            img={this.state.products[0] ? this.state.products[0].photo : ""}
            description={this.state.products[0] ? this.state.products[0].description : ""}
            stock={this.state.products[0] ? this.state.products[0].stock : 0}
            price={this.state.products[0] ? this.state.products[0].price : ""}
          />
        </ul>
     );
  }
}
 
export default App;
