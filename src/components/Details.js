import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import SimpleExpansionPanel from "./Panel";
import SimpleSlider from "./Carousel";
import './feedback.css';



export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End of title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span> {price}
                    </strong>
                  </h4>
                  {/* <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    product description:
                  </p>
                  <p className="text-muted lead">{info}</p> */}
                  {/* buttons */}
                  <div class="row">
                    <div class="col-md-6">
                    <Link to="/" class="site-btn">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    </div>
                    <div class="col-md-6">
                    <ButtonContainer
                      class="site-btn sb-dark"
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in Cart" : "add to cart"}
                    </ButtonContainer>
                    </div>
                  </div>
                  <SimpleExpansionPanel/>
                </div>
              </div>
              <SimpleSlider/>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
