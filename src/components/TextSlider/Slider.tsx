import React, { useState } from "react";
import "./Slider.css"; // Create a CSS file for styling

const Slider = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleClick = (text: string) => {
    console.log("Clicked:", text);
    // Add your click handling logic here
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <div className="text-slider">
        <div className="text" onClick={() => handleClick("Text 1")}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          beatae! Porro, ipsum quas. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quod unde, eos odit, ipsa soluta fugit tempore
          veniam recusandae quaerat accusantium repudiandae obcaecati? Sunt non
          unde amet eaque enim officia voluptatibus.
        </div>
        {/* <div className="text" onClick={() => handleClick("Text 2")}>
          tempora, inventore iusto corporis in aperiam vitae cum tenetur illo
        </div>
        <div className="text" onClick={() => handleClick("Text 3")}>
          libero aliquam, nesciunt illum asperiores, necessitatibus temporibus
        </div> */}
      </div>
    </div>
  );
};

export default Slider;
