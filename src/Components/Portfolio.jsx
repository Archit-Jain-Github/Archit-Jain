import React from "react";
import image from "../images/xplore.png";

const imageAltText = "xplore img";

const projectList = [
  {
    title: "GitHub Profile",
    description: "Checkout my GitHub profile to see my projects and contributions.",
    url: "https://github.com/Archit-Jain-Github",
  },
  {
    title: "Tech Articles",
    description: "Checkout my tech articles on LinkedIn to know more about my interests.",
    url: "https://www.linkedin.com/in/thisisarchitjain/recent-activity/articles/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: "3rem",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "40%",
            alignSelf: "center",
            flex: "1 0 300px",
            margin: "1rem",
          }}
        >
          <img
            src={image}
            style={{
              height: "90%",
              width: "70%",
              objectFit: "cover",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            alt={imageAltText}
          />
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {projectList.map((project) => (
            <div
              className="box"
              key={project.title}
              style={{
                flex: "1 0 300px",
                margin: "1rem",
                padding: "1rem",
              }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
