import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Fade } from "react-reveal";

// styles
import "./card.css";
import { Link } from "react-router-dom";

export type ProgramCardProps = {
  image: string;
  label: string;
  desc: string;
  link?: string;
};

const Card: React.FC<ProgramCardProps> = ({ image, label, desc, link }) => {
  return (
    <Link to={link as string}>
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
    </Link>
  );
};

export default Card;
