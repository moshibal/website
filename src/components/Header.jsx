import React from "react";
import image from "../image/my-photo.jpeg";
const Header = () => {
  return (
    <div className="mainHeader">
      <div className="aboutMe equal">
        <div className="details">
          <h1 className="headingLine">Hi, I'm Bishal Karki</h1>
          <p className="paragraphLine"> a passionate full-stack developer.</p>

          <a
            className="details-buttom"
            href="https://www.linkedin.com/in/bishal-karki-240810142/"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="imageDiv equal">
        <img src={image} className="myImge" alt="headerImage" />
      </div>
    </div>
  );
};
export default Header;
