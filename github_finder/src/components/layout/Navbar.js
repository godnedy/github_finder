import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  // if we do not pass in props, then those will be used, if we pass they will be overrwitten (see title: default is Hello, but we pass Github Finder in)
  icon: "fab fa-github",
  title: "Hello"
};

Navbar.propTypes = {
  //we can define what type of props we accept
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Navbar;
