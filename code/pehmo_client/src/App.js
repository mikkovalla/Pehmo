import React, { Component } from "react";
import "./App.css";
import LoginBox from "./components/LoginBox";
import FoodList from "./components/FoodList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginBox} />
            <Route exact path="/foodlist" component={FoodList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
