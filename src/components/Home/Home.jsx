import React from "react";
import FormComponent from "../Feedback";
import ProductList from "../ProductList";
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ProductList/>
      </React.Fragment>
    );
  }
}

export default Home;
