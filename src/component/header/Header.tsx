import React from "react";
import "./Header.scss";
import Title from "./Title";
import Nav from "./Nav";

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <Title />
        <Nav />
      </header>
    </div>
  );
}

export default Header;
