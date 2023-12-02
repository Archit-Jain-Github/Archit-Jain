import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description = "I'm a tech geek pursuing computer science. I create captivating experiences.";

const skillsList = [
  "Learner",
  "Problem Solver",
  "Project Management Skills",
  "Leader",
  "Good Communicator",
  "Teamwork Ability",
];

const detailOrQuote =
  "I'm an ambitious individual with a passion for tech and innovation. I'm constantly advancing my skills and eager to collaborate to create something meaningful.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            padding: 0,
            listStyle: "none",
            columns: 1,
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
