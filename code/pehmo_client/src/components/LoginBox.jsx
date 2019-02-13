import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      required
                      autoFocus
                    />
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div>
                    <p>Don't have an account? Sign up</p>
                  </div>
                  <Link to="/foodlist">
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      onClick={this.submitLogin.bind(this)}
                    >
                      Sign in
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginBox;
