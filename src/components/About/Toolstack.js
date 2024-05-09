import React from "react"; // Import React library
import { Col, Row } from "react-bootstrap"; // Import Col and Row components from react-bootstrap
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si"; // Import icons from react-icons

// Define the Toolstack functional component
function Toolstack() {
  return (
    // Row component to contain the tool icons
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Column for macOS icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      {/* Column for Visual Studio Code icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/* Column for Postman icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      {/* Commented out column for Slack icon */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col> */}
      {/* Column for Vercel icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack; // Export the Toolstack component as default
