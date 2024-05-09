import React from "react"; // Import React library
import { Container, Row, Col } from "react-bootstrap"; // Import Container, Row, Col components from react-bootstrap
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"; // Import icons from react-icons/ai
import { FaLinkedinIn } from "react-icons/fa"; // Import icon from react-icons/fa

// Define a functional component named Footer
function Footer() {
  let date = new Date(); // Get the current date
  let year = date.getFullYear(); // Extract the current year from the date

  return (
    // Render the footer using Container, Row, and Col components from react-bootstrap
    <Container fluid className="footer">
      <Row>
        {/* First column for designer/developer information */}
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Chirag Sharma</h3>
        </Col>
        {/* Second column for copyright information */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} CS</h3>
        </Col>
        {/* Third column for social media icons */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* GitHub icon with link */}
            <li className="social-icons">
              <a
                href="https://github.com/iamchiragsharma"
                style={{ color: "white" }} // Styling for icon color
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security attribute for external links
              >
                <AiFillGithub /> {/* GitHub icon */}
              </a>
            </li>
            {/* Twitter icon with link */}
            <li className="social-icons">
              <a
                href="https://twitter.com/ch1r4gsh4rm4"
                style={{ color: "white" }} // Styling for icon color
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security attribute for external links
              >
                <AiOutlineTwitter /> {/* Twitter icon */}
              </a>
            </li>
            {/* LinkedIn icon with link */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/chirag-sharma-94156b247/"
                style={{ color: "white" }} // Styling for icon color
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security attribute for external links
              >
                <FaLinkedinIn /> {/* LinkedIn icon */}
              </a>
            </li>
            {/* Instagram icon with link */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_.chiragsharma.__"
                style={{ color: "white" }} // Styling for icon color
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security attribute for external links
              >
                <AiFillInstagram /> {/* Instagram icon */}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer; // Export the Footer component as default
