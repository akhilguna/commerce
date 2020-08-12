import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ButtonContainer } from "../Button";
import { authActions } from "../../store/actions/auth.actions";

const Header = props => {
  const { auth } = props;

  return (
    <header className="containe-fluid">
      <div class="header-top">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 text-center text-lg-left">
						<a href="./index.html" class="site-logo">
							<img src="img/logo.png" alt=""/>
						</a>
					</div>
				
					<div class="col-xl-4 col-lg-6">
						<div class="user-panel">
							<div class="up-item">
								<i class="fa fa-profile"></i>
								<a href="#">Sign</a> In or <a href="#">Create Account</a>
							</div>
							<div class="up-item">
								<div class="shopping-card">
									<i class="fa fa-bag"></i>
									<span>0</span>
								</div>
								<a href="#">Shopping Cart</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      <nav className="navbar navbar-expand-lg navbar-light main-navbar">
        <Link to="/" className="navbar-brand">
          React/Redux
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {auth.uid ? (
              <React.Fragment>
                <li className="nav-item active">
                  <Link className=" nav-color" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-color" onClick={props.logOut}>
                    Log out
                  </a>
                </li>
                <li className="nav-item ml-5">
                 <Link to="/" className=" nav-color">
                    products
                 </Link>
               </li>
               <li className="nav-item ml-5">
            <Link to="/feedback" className=" nav-color">
              feedback
            </Link>
            </li>
        
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <Link className=" nav-color" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className=" nav-color" to="/register">
                    Register
                  </Link>
                </li>
              </React.Fragment>
            )}
            </ul>
            <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
        </div>
      </nav>
    </header>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(authActions.logOut())
  };
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
