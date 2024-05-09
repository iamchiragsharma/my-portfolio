// Import necessary modules and components
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.jpeg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

// Define the component for the navigation bar
function NavBar() {
  // Define state variables for controlling navbar expansion and color change
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // Define a function to handle scroll event
  function scrollHandler() {
    // Update navbar color based on scroll position
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // Add scroll event listener when the component mounts
  window.addEventListener("scroll", scrollHandler);

  return (
    // Render the Navbar component
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Render the Brand logo */}
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        {/* Render the Navbar toggle button */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            // Toggle navbar expansion
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        {/* Render the Navbar collapse section */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Render navigation links */}
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              {/* Render the Home link */}
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {/* Render the About link */}
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {/* Render the Projects link */}
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {/* Render the Resume link */}
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            {/* Blog link (commented out) */}
            {/* <Nav.Item>
              <Nav.Link
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}
            {/* Render the Fork button */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/iamchiragsharma"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar; // Export the NavBar component