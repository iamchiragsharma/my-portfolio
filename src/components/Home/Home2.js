import React from "react"; // Import React library
import { Container, Row, Col } from "react-bootstrap"; // Import Container, Row, and Col components from react-bootstrap
import myImg from "../../Assets/avatar.svg"; // Import image asset for the avatar
import Tilt from "react-parallax-tilt"; // Import Tilt component from react-parallax-tilt
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai"; // Import icons from react-icons/ai
import { FaLinkedinIn } from "react-icons/fa"; // Import icon from react-icons/fa

// Define the Home2 functional component
function Home2() {
  return (
    // Container for the home about section
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* Column for home about description */}
          <Col md={8} className="home-about-description">
            {/* Title */}
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            {/* Body */}
            <p className="home-about-body">
              I'm a hard worker and quick-witted person who knows to utilize technical concepts in a productive manner.
              <br />
              <br />I'm passionate about everything in
              <i>
                <b className="purple"> Javascript</b>
              </i>
              <br />
              <br />
              I enjoy working with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  modern JavaScript frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
              &nbsp; to build cool stuff.
            </p>
          </Col>
          {/* Column for avatar */}
          <Col md={4} className="myAvtar">
            {/* Tilt effect for avatar */}
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          {/* Column for home about social */}
          <Col md={12} className="home-about-social">
            {/* Title */}
            <h1>FIND ME ON</h1>
            {/* Subtitle */}
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            {/* Social links */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/iamchiragsharma"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {/* GitHub icon */}
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ch1r4gsh4rm4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {/* Twitter icon */}
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chirag-sharma-94156b247/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {/* LinkedIn icon */}
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_.chiragsharma.__"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  {/* Instagram icon */}
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2; // Export the Home2 component as default
