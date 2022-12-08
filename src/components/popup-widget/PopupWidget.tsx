import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";

// styles
import "./popup.css";

type Props = {
  show: boolean;
  toggleState: () => void;
};

const PopupWidget: React.FC<Props> = ({ show, toggleState }) => {
  return (
    <div className={`popup ${show ? "show" : null}`}>
      <div className="popup__content">
        <div className="title">
          <h2>Your Studies</h2>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              toggleState();
            }}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="popup__text">
          <div className="links">
            <Link to="/">Request Prospectus</Link>
            <Link to="/">How to Apply</Link>
            <Link to="/">Fees</Link>
            <Link to="/">Scholarships</Link>
            <Link to="/">Student Guide</Link>
            <div className="pic">
              <img src="/images/logo_dark.webp" alt="slui logo" />
            </div>
          </div>

          <div className="ref">
            <Link to="/">
              Why SLUI{" "}
              <span>
                <AiOutlineArrowRight size={30} />
              </span>
            </Link>
            <Link to="/">
              Study at SLUI{" "}
              <span>
                <AiOutlineArrowRight size={30} />
              </span>
            </Link>
            <Link to="/">
              Faculties{" "}
              <span>
                <AiOutlineArrowRight size={30} />
              </span>
            </Link>
            <Link to="/">
              Facilities{" "}
              <span>
                <AiOutlineArrowRight size={30} />
              </span>
            </Link>

            <div className="other">
              <Link to="/">Handbook</Link>
              <Link to="/">Core Principles</Link>
              <Link to="/">Leadership Team</Link>
              <Link to="/">Alumni</Link>
              <Link to="/">News</Link>
              <Link to="/">Events</Link>
              <Link to="/">Contact Us</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Programmes</Link>
              <Link to="/">Faculties</Link>
              <Link to="/">Campuses</Link>
              <Link to="/">Short Courses</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupWidget;
