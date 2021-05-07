import React from "react";
import "./Validate.scss";
import Howto from "./HowTo";
function Validate() {
  return (
    <div className="validate clearfix" id="Note">
      <h1>
        <i className="fas fa-check fa-page fa-fw"></i>Validataion
      </h1>
      <hr></hr>
      <Howto></Howto>
    </div>
  );
}

export default Validate;
