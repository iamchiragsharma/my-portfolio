import React from "react"; // Import React library
import { Container, Row, Col } from "react-bootstrap"; // Import Container, Row, Col components from react-bootstrap
import Particle from "../Particle"; // Import Particle component
import Github from "./Github"; // Import Github component
import Techstack from "./Techstack"; // Import Techstack component
import Aboutcard from "./AboutCard"; // Import Aboutcard component
import laptopImg from "../../Assets/about.png"; // Import image file
import Toolstack from "./Toolstack"; // Import Toolstack component

// Define the About functional component
function About() {
  return (
    // Container for the about section
    <Container fluid className="about-section">
      <Particle /> {/* Particle component for background animation */}
      <Container>
        {/* Row for layout */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* Column for left section */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {/* Title */}
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            {/* Aboutcard component */}
            <Aboutcard />
          </Col>
          {/* Column for right section */}
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* Image */}
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* Section for professional skillset */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        {/* Techstack component */}
        <Techstack />
        {/* Section for tools */}
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        {/* Toolstack component */}
        <Toolstack />
        {/* Github component */}
        <Github />
      </Container>
    </Container>
  );
}

export default About; // Export the About component as default
