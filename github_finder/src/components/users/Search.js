import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  // onSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.state.text); // if I wouldn't use arrow function like below, then I'll need to call it this.onSubmit.bind(this)
  // }
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter sth", "light");
    } else {
      this.props.searchUsers(this.state.text); //passing props up to App component
      this.setState({ text: "" });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props; // we are taking those info from props and assigning them to local variables
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && ( // if this.props.showClear is true, then show the button
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
