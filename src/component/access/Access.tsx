import React from "react";
import "component/access/Access.scss";
import { comment } from "const/vars";
function Access() {
  return (
    <div className="message clearfix" id="Message">
      <h1>
        <i className="fas fa-comment"></i>Message
      </h1>
      <hr></hr>
      <div className="message-content">
        <h2>
          <i className="far fa-compass icon"></i>On working together
        </h2>
        {comment.map((val) => (
          <p>{val}</p>
        ))}
      </div>
    </div>
  );
}

export default Access;
