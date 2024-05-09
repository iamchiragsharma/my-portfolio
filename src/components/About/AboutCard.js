import React from "react"; // Import React library
import Card from "react-bootstrap/Card"; // Import Card component from react-bootstrap
import { ImPointRight } from "react-icons/im"; // Import ImPointRight icon from react-icons

// Define the AboutCard functional component
function AboutCard() {
  return (
    // Card component for displaying about information
    <Card className="quote-card-view">
      <Card.Body>
        {/* Blockquote for the main content */}
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Introduction */}
            Hi Everyone, I am <span className="purple">Chirag Sharma </span>
            from <span className="purple"> Mohali, India.</span>
            <br />
            {/* Education */}
            I am currently pursuing MCA from Chandigarh University, Mohali, Punjab, India
            <br />
            <br />
            {/* Interests */}
            Apart from coding, some other activities that I love to do!
          </p>
          {/* List of activities */}
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Good Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* Quote */}
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          {/* Footer */}
          <footer className="blockquote-footer">Chirag</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard; // Export the AboutCard component as default
