import React, { Fragment } from "react";
import spinner from "./spinner 2.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;

//this component template was create by typing race + Enter
