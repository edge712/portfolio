import React from "react";
import "component/profile/Profile.scss";

function Minato() {
  return (
    <div className="profile-box clearfix">
      <div className="profile-img-box">
        <img src={require("component/img/title.png")}></img>
      </div>
      <div className="profile-str-box">
        <div className="profile-str">
          <dl>
            <dt>
              <span className="name">9779277e</span>
            </dt>
            <p>
              Working as software, network, and automation engineer. Speak
              Japanese and English.
            </p>
            <p>
              Just as hobby, making 3DCG, writing and composing song, making
              movie, developping FE.
            </p>
            <dd>Software / Network / Automation</dd>
            <dd>Python / C++ / Testing / Server</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Minato;
