import React, { useState } from "react";

function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [headingText, setHeadingText] = useState("Hello");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // var isSubmitted = false;

  function handleMouseOverEvent() {
    setIsMouseOver(true);
  }
  function handleMouseOutEvent() {
    setIsMouseOver(false);
  }

  function handleHeading() {
    setIsSubmitted(true);
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      {isSubmitted ? null : (
        <button
          onMouseOver={handleMouseOverEvent}
          onMouseOut={handleMouseOutEvent}
          onClick={handleHeading}
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default App;
