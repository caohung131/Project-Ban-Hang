import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Nav = () => {
  return (
    <div>
      <div className="start">
        <div>
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </div>
        <p>Sleek DashBoard</p>
      </div>
    </div>
  );
};

export default Nav;
