import React from "react";
import "component/note/note.scss";
import Howto from "./HowTo";
function Note() {
  return (
    <div className="note clearfix" id="Note">
      <h1>
        <i className="fas fa-check fa-page fa-fw"></i>Validate
      </h1>
      <hr></hr>
      <Howto></Howto>
    </div>
  );
}

export default Note;
