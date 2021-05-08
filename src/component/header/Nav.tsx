import React from "react";
import { HashLink } from "react-router-hash-link";
function Nav() {
  return (
    <div className="Nav">
      <nav>
        <ul>
          <li>
            <HashLink to="/#Note">
              <i className="fas fa-check fa-nav fa-fw"></i>
              Validation
            </HashLink>
          </li>
          <li>
            <HashLink to="/#Profile">
              <i className="far fa-user fa-nav fa-fw"></i>
              Profile
            </HashLink>
          </li>

          <li>
            <HashLink to="/#Skills">
              <i className="fas fa-wrench"></i>
              Skills
            </HashLink>
          </li>
          <li>
            <HashLink to="/#Message">
              <i className="fas fa-comment"></i>
              Message
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
