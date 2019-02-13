import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kurkku',
      ean: '3294780347896986',
      expiryDate: '2019-02-14',
      purchaseDate: '2019-02-13'
    };
  }
  addFood(e) {
    e.preventDefault()
    fetch('http://localhost:3002/api/food/user/1/food/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: {
        "name": this.state.name,
        'ean': this.state.ean,
        'expiryDate': this.state.expiryDate,
        'purchaseDate': this.state.purchaseDate
      }
    })
  }

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
                    <label htmlFor="inputEmail">Food name</label>
                    <input
                      type="text"
                      name="name"
                      id="inputFood"
                      className="form-control"
                      required
                      autoFocus
                    />
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="inputean">Product code</label>
                    <input
                      type="text"
                      id="inputean"
                      name="ean"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="inputExpDate">Expiry Date</label>
                    <input
                      type="text"
                      id="inputExpDate"
                      name="expiryDate"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="inputPurchaseDate">Purchase Date</label>
                    <input
                      type="text"
                      id="purchaseDate"
                      name="purchaseDate"
                      className="form-control"
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
