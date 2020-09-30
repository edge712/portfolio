import React from "react";

function Howto() {
  return (
    <div className="howto">
      <h2>
        <i className="far fa-compass icon"></i>How to validate me
      </h2>
      <div className="page-p">
        <p>echo -n "Firstname Lastname" | md5sum</p>
        <p>The head of hash will be matched to "9779277e".</p>
      </div>
    </div>
  );
}

export default Howto;
