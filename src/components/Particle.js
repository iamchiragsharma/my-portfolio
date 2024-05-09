import React from "react"; // Import React library
import Particles from "react-tsparticles"; // Import Particles component from react-tsparticles library

// Define a functional component named Particle
function Particle() {
  return (
    // Render the Particles component
    <Particles
      id="tsparticles" // Unique ID for the particles container
      params={{ // Particle configuration parameters
        particles: { // Particle settings
          number: { // Number of particles
            value: 160, // Total number of particles
            density: { // Particle density
              enable: true, // Enable density calculation
              value_area: 1500, // Area in which particles are distributed
            },
          },
          line_linked: { // Settings for linked lines between particles
            enable: false, // Disable linked lines
            opacity: 0.03, // Opacity of the lines
          },
          move: { // Particle movement settings
            direction: "right", // Direction of movement
            speed: 0.05, // Speed of movement
          },
          size: { // Particle size settings
            value: 1, // Size of particles
          },
          opacity: { // Particle opacity settings
            anim: { // Animation settings for opacity
              enable: true, // Enable opacity animation
              speed: 1, // Speed of opacity animation
              opacity_min: 0.05, // Minimum opacity value
            },
          },
        },
        interactivity: { // Interaction settings
          events: { // Events settings
            onclick: { // On click event
              enable: true, // Enable on click event
              mode: "push", // Interaction mode on click
            },
          },
          modes: { // Interaction modes
            push: { // Push interaction mode
              particles_nb: 1, // Number of particles emitted on click
            },
          },
        },
        retina_detect: true, // Enable retina display detection
      }}
    />
  );
}

export default Particle; // Export Particle component
