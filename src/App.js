import React, { useState, useEffect } from "react";

import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import "./App.scss";
import Project from "./components/Project.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import Logo from "./image/logo.png";

function App() {
  const [showUP, setShowUp] = useState(true);

  useEffect(() => {
    const onScroll = (e) => {
      // setScrollTop(e.target.documentElement.scrollTop);
      // setScrolling(e.target.documentElement.scrollTop > scrollTop);

      if (window.pageYOffset >= 1000) {
        console.log(Window.pageYOffset);
        setShowUp(true);
      } else {
        setShowUp(true);
      }
    };

    onScroll();
  }, [showUP]);

  return (
    <div className="App" id="app">
      {/* <div className="container"> */}
      <Nav />
      <Header />
      <Main />
      <Project />
      <Form />
      <Footer Img={Logo} />
      {/* </div> */}
      {showUP && (
        <a href="#app">
          <span className="goUp">
            <i className="fas fa-arrow-up"></i>
          </span>
        </a>
      )}
    </div>
  );
}

export default App;
