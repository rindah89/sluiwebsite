import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";

// styles
import "./popup.css";

type Props = {
  show: boolean;
  toggleState: () => void;
};

const PopupWidget: React.FC<Props> = ({ show, toggleState }) => {
  // const navigate = useNavigate();

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
            <a
              href="https://drive.google.com/file/d/10mGyssnKFADEbhsUjY_UG7caT4UDRzu7/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Request Prospectus
            </a>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/application-and-admission"
            >
              How to Apply
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/fees"
            >
              Fees
            </Link>
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/scholarships"
            >
              Scholarships
            </Link>
            <a
              onClick={() => {
                toggleState();
              }}
              href="https://drive.google.com/file/d/1YeHgdwW60XqlO07ixf__0IEhSPKj-rGH/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Student Guide
            </a>
            <div className="pic">
              <img src="/images/logo_dark.webp" alt="slui logo" />
            </div>
          </div>

          <div className="ref">
            <Link
              onClick={() => {
                toggleState();
              }}
              to="/why-us"
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
              to="/facilities"
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
                to="/handbook"
              >
                Handbook
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/core-principles"
              >
                Core Principles
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/leadership-team"
              >
                Leadership Team
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/alumni"
              >
                Alumni
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/news-and-events"
              >
                News & Events
              </Link>
              <Link
                onClick={() => {
                  toggleState();
                }}
                to="/fill-form"
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
