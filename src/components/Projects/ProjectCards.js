import React from "react"; // Import React library
import Card from "react-bootstrap/Card"; // Import Card component from react-bootstrap
import Button from "react-bootstrap/Button"; // Import Button component from react-bootstrap
import { CgWebsite } from "react-icons/cg"; // Import CgWebsite icon from react-icons/cg
import { BsGithub } from "react-icons/bs"; // Import BsGithub icon from react-icons/bs

// Define the ProjectCards functional component
function ProjectCards(props) {
  return (
    // Card container for each project
    <Card className="project-card-view">
      {/* Image for the project */}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        {/* Title of the project */}
        <Card.Title>{props.title}</Card.Title>
        {/* Description of the project */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* Render a button for demo link if it's not a blog */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink} // Link to the demo
            target="_blank" // Open link in a new tab
            style={{ marginLeft: "10px" }} // Styling for the button
          >
            {/* Website icon */}
            <CgWebsite /> &nbsp;
            {"Demo"} {/* Text for the button */}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards; // Export the ProjectCards component as default
