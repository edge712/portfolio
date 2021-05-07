import React from "react";
import "component/profile/Profile.scss";
import { c } from "../../const/vars";
import TimeEvent from "component/profile/TimeEvent";

function Minato() {
  return (
    <div className="whoami clearfix">
      <ul className="timeline">
        {c.map((val) => (
          <TimeEvent {...val}></TimeEvent>
        ))}
      </ul>
    </div>
  );
}

export default Minato;
