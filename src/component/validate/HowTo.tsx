import React from "react";
import "./Validate.scss";
import { title } from "../../const/vars";

function Howto() {
  return (
    <div className="howto">
      <h2>
        <i className="far fa-compass icon"></i>How to validate me
      </h2>
      <div className="page-p">
        <p>
          Replace the "Firstname Lastname" with the actual expected name and
          execute the following command. The hash code will be matched to the
          title <span className="hilight">{title}</span>.
        </p>
        <p>
          <code>echo -n "Firstname Lastname" | md5sum | cut -c 1-8</code>
        </p>
      </div>
    </div>
  );
}

export default Howto;
