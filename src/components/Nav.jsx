import React from "react";
import logo from "../image/logo.png";
const Nav = () => {
  return (
    <div className="mainNav">
      <div>
        <img src={logo} className="logo"></img>
      </div>
      <ul className="unorderedList">
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Education</a>
        </li>
        <li>
          <a href="#">My Bolg</a>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
