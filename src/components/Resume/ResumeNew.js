import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdfFile from "../../Assets/my_resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openPdfInNewTab = (e) => {
    e.preventDefault();
    window.open(pdfFile, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={openPdfInNewTab}
            style={{ maxWidth: "150px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdfFile} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={openPdfInNewTab}
            style={{ maxWidth: "150px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;



// import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect from 'react'
// import { Container, Row } from "react-bootstrap"; // Import Container and Row from react-bootstrap
// import Button from "react-bootstrap/Button"; // Import Button component from react-bootstrap
// import Particle from "../Particle"; // Import Particle component from "../Particle"
// import pdf from "../../Assets/../Assets/my_resume.pdf"; // Import path to PDF file
// import { AiOutlineDownload } from "react-icons/ai"; // Import AiOutlineDownload icon from react-icons/ai
// import { Document, Page, pdfjs } from "react-pdf"; // Import Document, Page, and pdfjs from react-pdf
// import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Import styling for Page component from react-pdf
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`; // Set workerSrc for pdfjs

// // Define the ResumeNew functional component
// function ResumeNew() {
//   const [width, setWidth] = useState(1200); // Declare a state variable 'width' and initialize it with 1200

//   useEffect(() => {
//     // Define a side effect to be executed after rendering
//     setWidth(window.innerWidth); // Set the 'width' state to the inner width of the window
//   }, []); // Run the effect only once after the initial render

//   return (
//     <div>
//       {/* Container for the resume section */}
//       <Container fluid className="resume-section">
//         {/* Particle component for background */}
//         <Particle />
//         {/* Row for the download button */}
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           {/* Download button */}
//           <Button
//             variant="primary"
//             href={pdf} // Link to the PDF file
//             target="_blank" // Open link in a new tab
//             style={{ maxWidth: "150px" }} // Styling for the button
//           >
//             {/* Download icon */}
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>

//         {/* Row for displaying the PDF */}
//         <Row className="resume">
//           {/* Document component for rendering the PDF */}
//           <Document file={pdf} className="d-flex justify-content-center">
//             {/* Page component for each page of the PDF */}
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} /> {/* Render the first page of the PDF */}
//           </Document>
//         </Row>
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           {/* Download button */}
//           <Button
//             variant="primary"
//             href={pdf} // Link to the PDF file
//             target="_blank" // Open link in a new tab
//             style={{ maxWidth: "150px" }} // Styling for the button
//           >
//             {/* Download icon */}
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew; // Export the ResumeNew component as default
