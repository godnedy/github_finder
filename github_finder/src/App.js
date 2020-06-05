import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

const client_id = "1e515440d0d96fabc341";
const client_secret = "93e1179c75cf729f8d94c411ce90e30aa22d194e";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    //also lifecycle method
    this.setState({ loading: true });
    console.log("did mount");
    const res = await axios.get("https://api.github.com/users"); // async await so that we do not need get().then()

    this.setState({ users: res.data, loading: false });
    console.log(res.data);
  }

  render() {
    //lifecycle method, only one required
    return (
      <div className='App'>
        <Navbar title='Github Finder' />
        <Users users={this.state.users} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
