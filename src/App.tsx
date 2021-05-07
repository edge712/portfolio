import React from "react";
import Header from "./component/header/Header";
import "./App.scss";
import Validate from "./component/validate/Validate";
import Access from "./component/access/Access";
import Profile from "./component/profile/Profile";
import Skils from "component/skils/Skils";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {<Header />}
        <div className="Body">
          <div className="page">
            <Validate></Validate>
            <Profile></Profile>
            <Skils></Skils>
            <Access></Access>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
