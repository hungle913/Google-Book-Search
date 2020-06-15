import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

// import NoMatch from "./pages/NoMatch";
// import Search from "./pages/Search";
// import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron />
            {/* <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoMatch} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
