import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    // if we do not pass in props, then those will be used, if we pass they will be overrwitten (see title: default is Hello, but we pass Github Finder in)
    icon: "fab fa-github",
    title: "Hello"
  };

  static propTypes = {
    //we can define what type of props we accept
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
