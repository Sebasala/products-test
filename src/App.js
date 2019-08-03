import React, { Component } from 'react';
import productsData from './data/products';

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
        <h1>{this.state.products[0] ? this.state.products[0].name : "Loading..."}</h1>
     );
  }
}
 
export default App;
