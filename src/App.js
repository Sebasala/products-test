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
          <Product name={this.state.products[0] ? this.state.products[0].name : ""} />
        </ul>
     );
  }
}
 
export default App;
