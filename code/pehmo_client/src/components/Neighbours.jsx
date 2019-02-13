import React, { Component } from "react";
import NavBar from "./NavBar";

class Neighbours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      neighbours: []
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:3002/api/user/1/neighbours"
    )
      .then(res => res.json())
      .then(items => {
        console.log(items);
        this.setState({
          neighbours: items.neighbours
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <h5 className="card-title text-center">Your food list</h5>
              <table>
                <tbody>
                  <tr>
                    <th>Neighbours</th>
                    <th>Name</th>
                  </tr>
                </tbody>
                {this.state.neighbours.map((item) => (
                  <tbody key={item}>
                    <tr>
                      <td>{item}</td>
                    </tr>
                  </tbody>
                ))}
              </table>              
              <NavBar />
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Neighbours;
