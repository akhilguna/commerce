import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Common/Header";
import Content from "./components/Common/Content";
import Footerbottom from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { ProductProvider } from "./context";
import Screenloading from "./components/Loader";


function App() {
  return (
    <div className="App">
      <Header />
      <Content className="main" />
      <Footerbottom/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ProductProvider>
      <Screenloading/>
      <App />
      </ProductProvider>
    </BrowserRouter>
  </Provider>,
  rootElement
);
