import React from "react";
import Header from "./component/header/Header";
import "./App.scss";
import Note from "./component/note/Note";
import Access from "./component/access/Access";
import Profile from "./component/profile/Profile";
import Idea from "component/idea/Idea";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {<Header />}
        <div className="Body">
          <div className="page">
            <Note></Note>
            <Profile></Profile>
            <Idea></Idea>
            <Access></Access>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
