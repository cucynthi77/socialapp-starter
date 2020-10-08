import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MessageFeed from "./pages/MessageFeed"
import NotFound from "./components/notfound/NotFound";

import UserFeed from "./pages/UserFeed";

class App extends React.Component {
  render() {
    return (
      // <div>
      //  <h2>Javamaniacs</h2>
      //  <img src="/images/logo.png" alt=""/>
      // </div>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/profile/:username"
          component={Profile}
        />
        <Route
          exact
          path="/messagefeed"
          component={MessageFeed}
        />
        <Route
        exact
        path="/userFeed"
        component={UserFeed}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
    );
  }
}
export default App;

// PM: remove comments from line 13 to 16, fix formatting line 34 to 36
// Overall project file structure: combine images and imagesProfile directories