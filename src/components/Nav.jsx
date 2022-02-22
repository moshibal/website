import React, { useState } from "react";
import logo from "../image/logo.png";
import Modal from "react-modal";
import CustomModal from "./modal/Modal.jsx";
const Nav = () => {
  const [showModal, setShowModel] = useState(false);
  const ShowModel = () => {
    setShowModel(true);
  };
  const CloseModel = () => {
    setShowModel(false);
  };
  return (
    <div className="mainNav">
      <div>
        <img src={logo} className="logo" alt="logo-img"></img>
      </div>
      <ul className="unorderedList">
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>

        <li>
          <a href="#1" onClick={ShowModel}>
            About Me
          </a>
          <Modal isOpen={showModal} onRequestClose={() => setShowModel(false)}>
            <CustomModal onShowModal={CloseModel} />
          </Modal>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
