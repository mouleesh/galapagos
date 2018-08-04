import React from "react";
import {Router, Route, Switch, Link} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

import NotFoundPage from "./../components/NotFoundPage";
import Header from "./../components/Header";
import App from "./../containers/App";

import LoginPage from "./../components/LoginPage";
import SignUpPage from "./../components/SignUpPage";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const HomePage = () => (
  <div>
    <h3>This is Home page</h3>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
  </div>
);

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={SignUpPage}/>

        <PrivateRoute path="/app" component={App} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;
// <Route path="/app" component={App}/>
