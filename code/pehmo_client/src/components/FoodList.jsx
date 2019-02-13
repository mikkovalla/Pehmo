import React, { Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageexp1: "",
      messageexp2: "",
      exptoday: [],
      expd: [],
      listed: [],
      selectedItems: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3002/api/food/user/1/food/list")
      .then(res => res.json())
      .then(items => {
        console.log(items);
        this.setState({
          message: items.message,
          messageexp1: items.messageExpy,
          messageexp2: items.messageExpy2,
          exptoday: items.expToday,
          expd: items.expBefore,
          listed: items.listed
        });
      });
  }

  onCheckboxClick = item => () => {
    const { selectedItems } = this.state;
    if (selectedItems.indexOf(item.id) !== -1) {
      this.setState({
        selectedItems: selectedItems.filter(i => i !== item.id)
      });
      return;
    }

    this.setState({ selectedItems: [...selectedItems, item.id] });
  };

  isBtnDisabled = () => {
    return this.state.selectedItems.length < 1;
  };

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
                    <th>{this.state.messageexp1}</th>
                    <th>Name</th>
                    <th>Expiry Date</th>
                  </tr>
                </tbody>
                {this.state.exptoday.map((item, id) => (
                  <tbody key={id}>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.expiryDate}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <table>
                <tbody>
                  <tr>
                    <th>{this.state.messageexp2}</th>
                    <th>Name</th>
                    <th>Expiry Date</th>
                  </tr>
                </tbody>
                {this.state.expd.map((item, id) => (
                  <tbody key={id}>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.expiryDate}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <table>
                <tbody>
                  <tr>
                    <th>Selection</th>
                    <th>Name</th>
                    <th>Expiry Date</th>
                  </tr>
                </tbody>
                {this.state.listed.map((item, id) => (
                  <tbody key={id}>
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          onClick={this.onCheckboxClick(item)}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.expiryDate}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <div>
                <button
                  type="button"
                  class="btn btn-primary"
                  disabled={this.isBtnDisabled()}
                >
                  Share
                </button>
                <Link to="/recipes">
                  <button
                    type="button"
                    class="btn btn-primary"
                    disabled={this.isBtnDisabled()}
                  >
                    Generate Recipe
                  </button>
                </Link>
              </div>
              <NavBar />
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodList;
