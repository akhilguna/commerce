import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ButtonContainer } from "../Button";
import { authActions } from "../../store/actions/auth.actions";
import '../feedback.css';

const Header = props => {
  const { auth } = props;

  return (
    <header>
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
								<a href="/">Sign</a> or <a href="/">Create Account</a>
							</div>
						
						</div>
					</div>
				</div>
			</div>
		</div>
      <nav className="navbar navbar-expand-lg navbar-light main-navbar">
        <div className="container">
        {/* <Link to="/" className="navbar-brand">
          React/Redux
        </Link> */}
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
            {auth.uid ? (
              <React.Fragment>
                          <ul className="navbar-nav mr-auto main-menu">
                <li className="nav-item active">
                  <Link className=" nav-color" to="/">
                    Home
                  </Link>
                </li>
               <li className="nav-item">
            <Link to="/feedback" className=" nav-color">
              feedback
            </Link>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto main-menu">
            <li className="nav-item">
            <Link to="/cart" className="nav-color">
            my cart
        </Link>
        </li>
        <li className="nav-item">
                  <a className="nav-color" onClick={props.logOut}>
                    Log out
                  </a>
        </li>
        </ul>
        </form>
              </React.Fragment>
            ) : (
              <React.Fragment>
              <ul className="navbar-nav mr-auto main-menu">
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
                </ul>
              </React.Fragment>
            )}
           
        </div>
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
