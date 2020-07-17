import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";

import GihubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  // we are using Switch to wrap multiple components in one router
  return (
    <GihubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={(
                    props // we have to add Fragment below, if not we would have two parent elements, i.e. Search and Users
                  ) => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/user/:login' //route param login, we will have access to id in our route (i.e. User) in props.match.params.login )
                  component={User}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GihubState>
  );
};

export default App;
