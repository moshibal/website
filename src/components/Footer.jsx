import React, { useState } from "react";
import reactDom from "react-dom";
import Modal from "react-modal";
import CustomModal from "./modal/Modal.jsx";
const Footer = (props) => {
  const [showModal, setShowModel] = useState(false);
  const ShowModel = () => {
    setShowModel(true);
  };
  const CloseModel = () => {
    setShowModel(false);
  };
  const htmlElement = document.getElementById("overlays");
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footerMain">
      <div className="secondFooter">
        <div className="logoDiv">
          <img src={props.Img} className="footerLogo" alt="logo"></img>
        </div>
        <ul className="ulFirst">
          <li>
            <a href="#main" onClick={ShowModel}>
              About Me
            </a>
            {setShowModel &&
              reactDom.createPortal(
                <Modal
                  isOpen={showModal}
                  onRequestClose={() => setShowModel(false)}
                >
                  <CustomModal onShowModal={CloseModel} />
                </Modal>,
                htmlElement
              )}
          </li>
          <li>
            <a href="https://github.com/moshibal?tab=repositories">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bishal-karki-240810142/">
              Contact Me
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bishal-karki-240810142/">
              Linkedin
            </a>
          </li>
        </ul>
      </div>

      <hr></hr>
      <p>© {year} Bishal Karki</p>
    </div>
  );
};
export default Footer;
