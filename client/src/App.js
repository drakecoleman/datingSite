import React from "react";
import Register from "./Components/register";
import Login from "./Components/login";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProfile from "./Components/user";
import Logout from "./Components/logout";
import Visitor from "./Components/visitor";

function App() {
  let routes;

  routes = (
    <React.Fragment>
      <Switch>
        <Home exact path="/" />
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>

        <Route exact path="/logout" component={Logout}></Route>
        <Route exact path="/user" component={UserProfile}></Route>
        <Route exact path="/:url" component={Visitor}></Route>
      </Switch>
    </React.Fragment>
  );

  return <Router>{routes}</Router>;
}

export default App;
