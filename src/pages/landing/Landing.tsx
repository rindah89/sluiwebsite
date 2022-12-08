import React from "react";

// components
import Programs from "../../components/programs/Programs";

// styles
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="hero">
        <h3>SRH BERLIN UNIVERSITY OF APPLIED SCIENCES</h3>
        <h1>Dein Ziel. Dein Studium.</h1>

        <Programs />
      </div>
    </div>
  );
};

export default Landing;
