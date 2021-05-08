import React from "react";
import "component/profile/Profile.scss";
import { history, title } from "../../const/vars";
import cg from "component/img/bg.jpg";
import TimeEvent from "component/profile/TimeEvent";

function Minato() {
  return (
    <div className="whoami clearfix">
      <h2>
        <i className="far fa-compass icon"></i>Job career
      </h2>
      <ul className="timeline">
        {history.map((val) => (
          <TimeEvent {...val}></TimeEvent>
        ))}
      </ul>
      <hr></hr>
      <h2>
        <i className="far fa-compass icon"></i>About me
      </h2>
      <div className="aboutme">
        <dl>
          <dt>{title}</dt>
          <h3>Root</h3>
          <dd>~ 1998 : Michigan, United States</dd>
          <dd>1999 ~ : Yokohama Japan</dd>
          <h3>Computer Sciense</h3>
          <dd>Software engineer, Network engineer, QA engineer</dd>
          <h3>Music</h3>
          <dd>Song writer, Arranger, Audio engineer</dd>
          <h3>Hobby</h3>
          <dd>Bascketball, 3DCG, DIY</dd>
          <h3>Others</h3>
          <dd>The background picture of this page is made by myself</dd>
          <img src={cg} alt="CG for background"></img>
        </dl>
      </div>
    </div>
  );
}

export default Minato;
