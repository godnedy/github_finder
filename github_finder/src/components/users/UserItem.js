import React, { Component } from "react";
import PropTypes from "prop-types";

export class UserItem extends Component {
  static propTypes = {
    //we can define what type of props we accept
    user: PropTypes.object.isRequired
  };

  render() {
    const { login, avatar_url, html_url } = this.props.user; //assign given values to local variables in render method
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: "60px" }} // react specific style setup, here property is in camelCase
        />
        <div className='h3'>{login}</div>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
