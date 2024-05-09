import React from "react"; // Import the React library

// Define a functional component named Pre that takes props as input
function Pre(props) {
  // Return a <div> element with an id determined by props.load
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre; // Export the Pre component as default
