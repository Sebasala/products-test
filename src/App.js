import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeRoute from './components/HomeRoute';
import ClientsRoute from './components/ClientsRoute';
import ContactsRoute from './components/ContactsRoute';
import ProductsRoute from './components/ProductsRoute';
import NoMatch from './components/NoMatch';

const App = (props) => {
  return ( 
    <Router>
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route path="/clients" component={ClientsRoute} />
        <Route path="/contacts" component={ContactsRoute} />
        <Route path="/products" component={ProductsRoute} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}
 
export default App;
