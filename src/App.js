import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import "./App.scss";
import Project from "./components/Project.jsx";

import Footer from "./components/Footer.jsx";
import Logo from "./image/logo.png";

function App() {
  return (
    <div className="App" id="app">
      <Nav />
      <Header />
      <Main />
      <Project />
      <Footer Img={Logo} />
    </div>
  );
}

export default App;
