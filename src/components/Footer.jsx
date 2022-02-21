import React from "react";
const Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footerMain">
      <div className="secondFooter">
        <ul className="ulFirst">
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">GitHub</a>
          </li>
          <li>
            <a href="">Contact Me</a>
          </li>
        </ul>
        <div className="logoDiv">
          <img src={props.Img} className="footerLogo"></img>
        </div>
        <ul className="ulSecond">
          <li>
            <a href="">LinkedIn</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
        </ul>
      </div>

      <hr></hr>
      <p>© {year} Bishal Karki</p>
    </div>
  );
};
export default Footer;
