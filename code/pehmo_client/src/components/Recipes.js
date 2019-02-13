import React, { Component } from "react";
import NavBar from "./NavBar";

class Recipes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <h5 className="card-title text-center"> Choose Your Recipe</h5>
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <th>Mashed Potato</th>
                    <td className="perfectly-match">Perfecly match</td>
                  </tr>
                  <tr>
                    <th>French Scalloped Potatoes</th>
                    <td className="missing">Missing: 1</td>
                  </tr>
                  <tr>
                    <th>Recipe 3</th>
                    <td className="missing">Missing: 2</td>
                  </tr>
                  <tr>
                    <th>Recipe 4</th>
                    <td className="missing">Missing: 2</td>
                  </tr>
                  <tr>
                    <th>Recipe 5</th>
                    <td className="missing">Missing: 2</td>
                  </tr>
                  <tr>
                    <th>Recipe 6</th>
                    <td className="not-recommend">Missing: 5</td>
                  </tr>
                  <tr>
                    <th>Recipe 7</th>
                    <td className="not-recommend">Missing: 6</td>
                  </tr>
                </tbody>
              </table>
              <NavBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipes;
