import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Fade } from "react-reveal";

// styles
import "./card.css";

export type ProgramCardProps = {
  image: string;
  label: string;
  desc: string;
};

const Card: React.FC<ProgramCardProps> = ({ image, label, desc }) => {
  return (
    <div className="card">
      <div className="preview">
        <LazyLoadImage
          effect="blur"
          width="100%"
          height="100%"
          src={image}
          alt={label}
        />
      </div>
      <Fade up>
        <div className="details">
          <h2>{label}</h2>
          <h4>{desc}</h4>
        </div>
      </Fade>
    </div>
  );
};

export default Card;
