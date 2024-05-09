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
              description="Real-time weather application using open weather API, Weatherdata dynamically fetched and interactively presented on the dashboard."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://weather-app-chirag-sharma.netlify.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connectify}
              isBlog={false}
              title="Connectify"
              description="A MERN stack social media app facilitating user connections, featuring profiles, news feeds, messaging, and content sharing. Its modern design and responsive UI ensure an engaging experience across devices, fostering meaningful connections in the digital era."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://connectify-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="A Quiz App"
              description="A simple, responsive and interactive Computer Science Quiz web application."
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
