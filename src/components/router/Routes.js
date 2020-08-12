import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";

import Home from "../Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import ProductList from "../ProductList";
import Details from "../Details";
import Cart from "../Cart/Cart";
import Modal from "../Modal";
import FormComponent from "../Feedback";


const Routes = () => (
  <React.Fragment>
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <PrivateRoutes path="/" component={Home} exact />
    <Route exact path="/" component={ProductList} />
    <Route path="/details" component={Details} />
    <Route path="/cart" component={Cart} />
    <Route path="/feedback" component={FormComponent} />
  </Switch>
  <Modal/>
  </React.Fragment>

);

export default Routes;
