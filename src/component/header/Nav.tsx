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
              <i className="fas fa-globe fa-nav fa-fw"></i>
              Skills
            </HashLink>
          </li>
          <li>
            <HashLink to="/#Access">
              <i className="fas fa-anchor fa-nav fa-fw"></i>
              Access
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
