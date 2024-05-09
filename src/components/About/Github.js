import React from "react"; // Import React library
import GitHubCalendar from "react-github-calendar"; // Import GitHubCalendar component
import { Row } from "react-bootstrap"; // Import Row component from react-bootstrap

// Define the Github functional component
function Github() {
  return (
    // Row component to contain the GitHub calendar
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {/* Commented out heading */}
      {/* <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1> */}
      {/* GitHubCalendar component (commented out) */}
      {/* <GitHubCalendar
        username=""
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      /> */}
    </Row>
  );
}

export default Github; // Export the Github component as default
