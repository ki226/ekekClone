import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Account/Login";
import Signup from "./Pages/Account/Signup";
import ProductList from "./Pages/Products/ProductList";
import ProductsDetails from "./Pages/Products/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import ProductSearch from "./Pages/Products/ProductSearch";
import Payment from "./Pages/Payment/Payment";
import FurnishingDetail from "./Components/FurnishingDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products/:id" component={ProductsDetails} />
          <Route exact path="/product/search/:item" component={ProductSearch} />
          <Route exact path="/cart" component={Cart} />

          <Route exact path="/furnishingDetail" component={FurnishingDetail} />
          <Route exact path="/payment" component={Payment} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
