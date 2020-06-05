import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    ble: [],
    loading: false
  };

  async componentDidMount() {
    //also lifecycle method
    this.setState({ ble: [], loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); // async await so that we do not need get().then()

    this.setState({ ble: res.data, loading: false });
  }

  render() {
    //lifecycle method, only one required
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search />
          <Users loading={this.state.loading} users={this.state.ble} />
        </div>
      </div>
    );
  }
}

export default App;
