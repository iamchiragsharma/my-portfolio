import React from "react"; // Import React library
import Typewriter from "typewriter-effect"; // Import Typewriter component from typewriter-effect

// Define the Type functional component
function Type() {
  return (
    // Typewriter component for typing effect
    <Typewriter
      options={{
        strings: [ // Array of strings to be typed
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true, // Automatically start typing
        loop: true, // Loop through the strings indefinitely
        deleteSpeed: 50, // Speed at which characters are deleted (in milliseconds)
      }}
    />
  );
}

export default Type; // Export the Type component as default
