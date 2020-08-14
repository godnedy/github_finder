import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

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
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/user/:login' //route param login, we will have access to id in our route (i.e. User) in props.match.params.login )
                  component={User}
                />
                <Route
                  component={NotFound} // default value, if anything else in the path go to NotFound
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
