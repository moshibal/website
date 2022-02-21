import React from "react";
const Main = () => {
  return (
    <div className="mainMain">
      <h2 className="heading-skills">my Full Stack Developer skills</h2>
      <main className="skillMain">
        <section className="section1">
          <h2>Front End languages</h2>
          <div className="listOfSkills">
            <h3>HTML5</h3>
            <h3>CSS3</h3>
            <h3>Javascript</h3>
            <h3>UI/UX Design</h3>

            <h3>The Unix Command Line</h3>
          </div>
        </section>
        <section className="section2">
          <h2>Back End languages</h2>
          <div className="listOfSkills">
            <h3>APIs</h3>
            <h3>Node.js</h3>

            <h3>EJS,PUG</h3>
            <h3>MongoDB,Mongoose</h3>
            <h3>Authentication & Security</h3>
            <h3>Git,Github and Version Control</h3>
          </div>
        </section>
        <section className="section3">
          <h2>Frameworks and Testing</h2>
          <div className="listOfSkills">
            <h3>jQuery</h3>
            <h3>React.js</h3>
            <h3>Bootstrap</h3>
            <h3>Express.js</h3>
            <h3>Unit Testing </h3>
            <h3>Chrome DevTools </h3>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Main;
