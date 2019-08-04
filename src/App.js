import React, { Component } from 'react';
import productsData from './data/products';

import Products from './components/Products';

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
        <div>
          <Products products={this.state.products} />
        </div>
     );
  }
}
 
export default App;
