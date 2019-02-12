import React, { Component } from "react";

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div>Here is the food list</div>
              <table>
                <tr>
                  <th>Selection</th>
                  <th>Name</th>
                  <th>Expiry Date</th>
                </tr>
                <tr>
                  <input type="checkbox" />
                  <td>Chicken</td>
                  <td>12/02/2019</td>
                </tr>
              </table>
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodList;
