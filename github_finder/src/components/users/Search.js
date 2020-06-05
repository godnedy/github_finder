import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.state.text); // if I wouldn't use arrow function like belowe, then I'll need to call it this.onSubmit.bind(this)
  // }
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            onChange={this.onChange}
          />
          <input
            type='submit'
            value={this.state.text}
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
