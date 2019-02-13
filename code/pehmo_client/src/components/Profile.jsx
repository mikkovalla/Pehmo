import React, { Component } from "react";
import NavBar from "./NavBar";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:3002/api/user/1"
    )
      .then(res => res.json())
      .then(items => {
        console.log(items);
        this.setState({
          user: items.user
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
                    <th>Your profile</th>
                  </tr>
                </tbody>
                <tbody key={this.state.user.id}>
                  <tr><td>{this.state.user.username}</td></tr>
                  <tr><td>{this.state.user.firstName}</td></tr>
                  <tr><td>{this.state.user.lastName}</td></tr>
                  <tr><td>{this.state.user.email}</td></tr>
                  <tr><td>{this.state.user.phone}</td></tr>
                </tbody>
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

export default Profile;