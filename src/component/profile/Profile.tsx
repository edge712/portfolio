import React from "react";
import "component/profile/Profile.scss";
import "component/profile/Minato";
import Minato from "component/profile/Minato";
function Profile() {
  return (
    <div className="profile clearfix" id="Profile">
      <h1>
        <i className="far fa-user fa-page fa-fw"></i>Profile
      </h1>
      <hr></hr>
      <Minato></Minato>
    </div>
  );
}

export default Profile;
