import React, { Component } from "react";
import "./App.css";
import LoginBox from "./components/LoginBox";
import FoodList from "./components/FoodList";
import Neighbours from "./components/Neighbours";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginBox} />
            <Route exact path="/foodlist" component={FoodList} />
            <Route exact path = "/neighbours"
            component = {
              Neighbours
            }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
