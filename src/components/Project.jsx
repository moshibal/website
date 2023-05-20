import React from "react";
import darwich1 from "../image/darwich1.png";
import darwich2 from "../image/darwich2.png";
import darwich3 from "../image/darwich3.png";
import groove1 from "../image/groove1.png";
import groove2 from "../image/groove2.png";
import groove3 from "../image/groove3.png";
const projects = [
  {
    appname: "Darwich Meats & Co.",
    appLink: `https://darwichmeats.com/`,
    paragraph: `E-commerce website using react in the frontend and node js in the backend hosted in AWS. `,

    images: [darwich1, darwich2, darwich3],
  },
  {
    appname: "GrooveandVibes Dance School",
    appLink: `https://grooveandvibes.com.au/`,
    paragraph: `Build with react using lastest css architecture and hosted in Netlify.`,

    images: [groove1, groove2, groove3],
  },
];

const Project = () => {
  return (
    <>
      <h3 className="heading-skills project-heading ">Some of my projects</h3>
      <section className="project" id="project">
        {projects.map((project) => (
          <div className="project-first">
            <div className="first-information">
              <div className="project-button">
                <a href={project.appLink} target="_blank" rel="noreferrer">
                  {project.appname}
                </a>
              </div>

              <p>{project.paragraph}</p>
            </div>
            <div className="first-pictures">
              <img
                src={project.images[0]}
                alt={project.images[0]}
                className="image image-1"
              />
              <img
                src={project.images[1]}
                alt={project.images[1]}
                className="image image-2"
              />
              <img
                src={project.images[2]}
                alt={project.images[2]}
                className="image image-3"
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default Project;
