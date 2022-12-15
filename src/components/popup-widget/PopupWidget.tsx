import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";

// styles
import "./popup.css";

type Props = {
  show: boolean;
  toggleState: () => void;
};

const PopupWidget: React.FC<Props> = ({ show, toggleState }) => {
  const navigate = useNavigate();

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
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/"
            >
              Request Prospectus
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/"
            >
              How to Apply
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/"
            >
              Fees
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/"
            >
              Scholarships
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/"
            >
              Student Guide
            </Link>
            <div className="pic">
              <img src="/images/logo_dark.webp" alt="slui logo" />
            </div>
          </div>

          <div className="ref">
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/"
            >
              Why SLUI{" "}
              <span>
                <AiOutlineArrowRight size={30} />
              </span>
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/"
            >
              Study at SLUI{" "}
              <span>
                <AiOutlineArrowRight size={30} />
              </span>
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/our-values"
            >
              Our Values{" "}
              <span>
                <AiOutlineArrowRight size={30} />
              </span>
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/"
            >
              Facilities{" "}
              <span>
                <AiOutlineArrowRight size={30} />
              </span>
            </Link>

            <div className="other">
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/"
              >
                Handbook
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/core-principle"
              >
                Core Principles
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/"
              >
                Leadership Team
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/"
              >
                Alumni
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/"
              >
                News
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/"
              >
                Events
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/"
              >
                Contact Us
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                className="hide"
                to="/"
              >
                About Us
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                className="hide"
                to="/"
              >
                Programmes
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                className="hide"
                to="/our-faculties"
              >
                Faculties
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                className="hide"
                to="/our-campuses"
              >
                Campuses
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                className="hide"
                to="/"
              >
                Short Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupWidget;
