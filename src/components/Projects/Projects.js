import React from "react"; // Import React library
import { Container, Row, Col } from "react-bootstrap"; // Import Container, Row, and Col components from react-bootstrap
import ProjectCard from "./ProjectCards"; // Import ProjectCard component from "./ProjectCards"
import Particle from "../Particle"; // Import Particle component from "../Particle"
import leaf from "../../Assets/Projects/leaf.png"; // Import image assets for projects
import emotion from "../../Assets/Projects/emotion.png"; // Import image assets for projects
import editor from "../../Assets/Projects/Quiz-app.png"; // Import image assets for projects
import connectify from "../../Assets/Projects/connectify.png"; // Import image assets for projects
import suicide from "../../Assets/Projects/suicide.png"; // Import image assets for projects
import bitsOfCode from "../../Assets/Projects/SkySight.png"; // Import image assets for projects

// Define the Projects functional component
function Projects() {
  return (
    // Container for the project section
    <Container fluid className="project-section">
      {/* Particle component for background */}
      <Particle />
      <Container>
        {/* Project heading */}
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        {/* Project description */}
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* Row for project cards */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project cards */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SkySight"
              description="A sophisticated real-time weather application build using MERN Stack harnesses the power of the OpenWeather API to dynamically fetch current weather data, ensuring up-to-the-minute accuracy. This data is then seamlessly and interactively presented on the user-friendly dashboard, providing users with a comprehensive and engaging weather experience."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://weather-app-chirag-sharma.netlify.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connectify}
              isBlog={false}
              title="Connectify"
              description="An innovative MERN stack social media platform fosters user connections by offering a wide array of features, including profiles, news feeds, messaging, and seamless content sharing. Its contemporary design and responsive user interface guarantee an immersive experience across various devices, nurturing significant connections in today's digital landscape."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://connectify-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="A Quiz App"
              description="Introducing a user-friendly and intuitive Computer Science Quiz web application, meticulously crafted to provide simplicity. Seamlessly blending responsiveness and interactivity, Dive into an array of thought-provoking questions, covering a spectrum of Computer Science topics, and embark on a journey of knowledge discovery."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://quiz-app-computer-science.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects; // Export the Projects component as default
