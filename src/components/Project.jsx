import React from "react";
import image1 from "../image/nat-1-large.jpg";
import image2 from "../image/nat-2-large.jpg";
import image3 from "../image/nat-3-large.jpg";
const projects = [
  {
    appname: "Natours App",
    appLink: `https://natours-bishal.herokuapp.com/`,
    paragraph: `In this app, I have created natours web application using pug
templete engine.With RESTful api, authorization and
authentication,MongoDB Atlast for the database, express framework to
create the server. A lot of third-party packages are being used
like, sendGrid for sending email, multer for image upload, Stripe
for payment, and many more.`,
    images: [image1, image2, image3],
  },
];

const Project = () => {
  return (
    <section className="project" id="project">
      <h3 className="project-heading">Some of my projects</h3>
      {projects.map((project) => (
        <div className="project-first">
          <div className="first-information">
            <h3 className="project-button">
              <a href={project.appLink}>{project.appname}</a>
            </h3>

            <p>{project.paragraph}</p>
          </div>
          <div className="first-pictures">
            <img
              src={project.images[0]}
              alt="natour"
              className="image image-1"
            />
            <img
              src={project.images[1]}
              alt="natour"
              className="image image-2"
            />
            <img
              src={project.images[2]}
              alt="natour"
              className="image image-3"
            />
          </div>
        </div>
      ))}
      <h3 className="project-button">
        <a href="#more">More Projects</a>
      </h3>
    </section>
  );
};
export default Project;
