import React from "react"; // Import React library
import { Container, Row, Col } from "react-bootstrap"; // Import Container, Row, and Col components from react-bootstrap
import homeLogo from "../../Assets/home-main.png"; // Import image assets for the home section
import Particle from "../Particle"; // Import Particle component from "../Particle"
import Home2 from "./Home2"; // Import Home2 component from "./Home2"
import Type from "./Type"; // Import Type component from "./Type"

// Define the Home functional component
function Home() {
  return (
    <section>
      {/* Container for the home section */}
      <Container fluid className="home-section" id="home">
        {/* Particle component for background */}
        <Particle />
        <Container className="home-content">
          <Row>
            {/* Column for home header */}
            <Col md={7} className="home-header">
              {/* Greeting */}
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                {/* Wave emoji */}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              {/* Name */}
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Chirag Sharma</strong>
              </h1>
              {/* Typing animation */}
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            {/* Column for home image */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo} // Image source
                alt="home pic" // Alternative text for accessibility
                className="img-fluid" // Bootstrap class for responsive images
                style={{ maxHeight: "450px" }} // Styling for the image
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Home2 component */}
      <Home2 />
    </section>
  );
}

export default Home; // Export the Home component as default
