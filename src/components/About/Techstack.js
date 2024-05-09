import React from "react"; // Import React library
import { Col, Row } from "react-bootstrap"; // Import Col and Row components from react-bootstrap
import { 
  CgCPlusPlus, // Import C++ icon from react-icons/cg
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava // Import various icons from react-icons/di
} from "react-icons/di";
import { 
  SiRedis, SiFirebase, SiNextdotjs, SiSolidity, SiPostgresql // Import various icons from react-icons/si
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb"; // Import Golang icon from react-icons/tb

// Define the Techstack functional component
function Techstack() {
  return (
    // Row component to contain the tech stack icons
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Commented out icon components */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      {/* JavaScript icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* Node.js icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      {/* React icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* MongoDB icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      {/* Next.js icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      {/* Git icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      {/* Firebase icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      {/* Python icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
    </Row>
  );
}

export default Techstack; // Export the Techstack component as default
