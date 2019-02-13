import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  addFood(e) {}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Add your food</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <label htmlFor="inputEmail">Food item</label>
                    <input
                      type="text"
                      id="inputFood"
                      className="form-control"
                      placeholder="Food item"
                      required
                      autoFocus
                    />
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="inputean">Product code</label>
                    <input
                      type="date"
                      id="inputean"
                      className="form-control"
                      placeholder="ean"
                      required
                    />
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="inputExpDate">Expiry Date</label>
                    <input
                      type="date"
                      id="inputExpDate"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="inputPurchaseDate">Purchase Date</label>
                    <input
                      type="date"
                      id="inputean"
                      className="form-control"
                      placeholder="Purchase Date"
                      required
                    />
                  </div>
                  <div>
                    <Link to="/foodlist" className="d-block text-center">
                      <button
                        className="btn  btn-primary "
                        onClick={this.addFood.bind(this)}
                      >
                        Add food
                      </button>
                    </Link>
                  </div>
                </form>
                <NavBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFood;
