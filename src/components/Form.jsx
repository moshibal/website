import React from "react";
import Vedio from "../image/formVedio.mp4";

const Form = () => {
  return (
    <div className="mainFom">
      <h2 className="formHeading">Send Me A Message</h2>
      <div className="vedioForm">
        <video src={Vedio} autoPlay={true} width="100%" muted loop />
      </div>

      <form className="formDiv" method="POST" href="#">
        <div>
          <label>Full Name:</label>
          <input type="text"></input>
        </div>

        <div>
          <label>Message:</label>
          <textarea rows="5" cols="50" name="Description"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default Form;
