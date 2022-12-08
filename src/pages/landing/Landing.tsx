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
      <div className="about">
        <div className="desc">
          <h2>Wir gestalten Zukunft</h2>
          <h4>
            Sechs Schools in drei Städten: Berlin, Dresden und Hamburg. Lehrende
            und Studierende aus über 100 Nationen in 70 akkreditierten deutsch-
            und englischsprachigen Studienprogrammen. Vielfältige Möglichkeiten
            in Management und Entrepreneurship, Medien- und Kreativwirtschaft,
            Technologie und IT, Musik, Design, Film und Text.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Landing;
