import React, { Component } from "react";

export class UserItem extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo"
  };

  render() {
    const { login, avatar_url, html_url } = this.state; //assign given values to local variables in render method
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
