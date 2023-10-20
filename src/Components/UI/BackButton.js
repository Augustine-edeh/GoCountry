// import React, { useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./BackButton.css";

// const BackButton = () => {
//   const navigate = useNavigate();
//   const containerRef = useRef(null);

//   const goToHome = () => navigate("/GoCountry/");
//   const handleHoverAndFocus = () => {
//     containerRef.current.focus();
//   };

//   return (
//     <div className="BackButton-container">
//       <button
//         className="BackButton"
//         onClick={goToHome}
//         onMouseEnter={handleHoverAndFocus}
//         onFocus={handleHoverAndFocus}
//       >
//         <span>&larr;</span> <span>Back</span>
//       </button>
//     </div>
//   );
// };
// export default BackButton;

import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const goToHome = () => {
    navigate("/GoCountry/");
  };

  const handleHoverAndFocus = () => {
    containerRef.current.focus();
  };

  return (
    <div className="BackButton-container" ref={containerRef} tabIndex={-1}>
      <button
        className="BackButton"
        onClick={goToHome}
        onMouseEnter={handleHoverAndFocus}
        onFocus={handleHoverAndFocus}
      >
        <span>&larr;</span> <span>Back</span>
      </button>
    </div>
  );
};

export default BackButton;
