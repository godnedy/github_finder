import React from "react";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // we take user from passed props and assign their values  login, avatar_url, html_url  so that they are available as local values
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
};

export default UserItem;
