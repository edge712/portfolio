import React from "react";
import "./Header.scss";
import { title } from "../../const/vars";

function Title() {
  return (
    <div className="Title">
      <h1>{title}</h1>
      <h2>Portfolio to introduce who I am</h2>
    </div>
  );
}

export default Title;
