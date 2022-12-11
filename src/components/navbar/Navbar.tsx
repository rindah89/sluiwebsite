import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { HiBars3BottomLeft } from "react-icons/hi2";

// styles
import "./navbar.css";

import { UseScrollPosition } from "../../lib/hooks/useScrollPosition";
import PopupWidget from "../popup-widget/PopupWidget";
import FacultyPopup from "../faculty-popup/FacultyPopup";
import { facultiesData } from "../../pages/faculties/Faculties";
import ProgramPopup from "../programmes/ProgramPopup";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const position = UseScrollPosition();

  const toggleState = () => {
    setShowMenu(false);
  };

  const [activePanelIndex, setActivePanelIndex] = useState<number>(0);
  const [activePanel, setActivePanel] = useState(false);

  const [programsPanelActivated, setProgramsPanelActivated] = useState(false);

  return (
    <nav className={`navbar ${position >= 100 ? "bg" : ""}`}>
      {activePanel && (
        <div
          onClick={() => {
            setActivePanel(false);
          }}
        >
          <FacultyPopup
            title={facultiesData[activePanelIndex].title}
            desc={facultiesData[activePanelIndex].desc}
            subDesc={facultiesData[activePanelIndex].subDesc}
            hnds={facultiesData[activePanelIndex].hnds}
            fps={facultiesData[activePanelIndex].fps}
            bdps={facultiesData[activePanelIndex].bdps}
            mdps={facultiesData[activePanelIndex].mdps}
          />
        </div>
      )}

      {programsPanelActivated && (
        <div
          onClick={() => {
            setProgramsPanelActivated(false);
          }}
        >
          <ProgramPopup
            programs={[
              {
                icon: (
                  <>
                    <FcApproval style={{ marginTop: "0.2rem" }} size={30} />
                  </>
                ),
                title: "HND",
                desc: "Discover the opportunities and your path to a dream career in the health, agriculture, engineering and technology sector.",
                link: "/hnd",
              },
              {
                icon: (
                  <>
                    <FcApproval style={{ marginTop: "0.2rem" }} size={30} />
                  </>
                ),
                title: "Foundation",
                desc: "The new SLUI International Medical Foundation Programme is a foundation course in Cameroon that provides you with the knowledge and competences to meet entry requirement into medical schools abroad.",
                link: "/",
              },
              {
                icon: (
                  <>
                    <FcApproval style={{ marginTop: "0.2rem" }} size={30} />
                  </>
                ),
                title: "Bachelors",
                desc: "Your start to an international career. Health, Agriculture, Engineering and Technology industries have never been so diverse. The modern range of courses offered by ST. Louis University Institute holds the right degree programme for every talent.",
                link: "/bachelors",
              },
              {
                icon: (
                  <>
                    <FcApproval style={{ marginTop: "0.2rem" }} size={30} />
                  </>
                ),
                title: "Masters",
                desc: "St Louis University Institute gives the opportunity for workers in any part of the world to further their studies and gain quality degrees while still working 100% at their job site. We currently have 9 master study programmes.",
                link: "/masters",
              },
            ]}
          />
        </div>
      )}
      <div className="logo">
        <Link to="/">
          <img src="/images/logo_red.webp" alt="logo" />
        </Link>
      </div>
      <ul className={`menu ${showMenu ? "show" : null}`}>
        <div className="close">
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              setShowMenu(false)
            }
          >
            <AiOutlineClose />
          </button>
        </div>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <a
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              setProgramsPanelActivated(true);
            }}
            href="#"
          >
            Programmes
          </a>
        </li>
        <li>
          <Link className="non__before" to="/our-faculties">
            Faculties
          </Link>
          <ul className="dropdown">
            <li>
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setActivePanelIndex(0);
                  setActivePanel(true);
                }}
                style={{ cursor: "pointer" }}
              >
                Faculty of Health and Biomedical Sciences{" "}
                <span>
                  <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setActivePanelIndex(1);
                  setActivePanel(true);
                }}
                style={{ cursor: "pointer" }}
              >
                Faculty of Engineering and Technology{" "}
                <span>
                  <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setActivePanelIndex(2);
                  setActivePanel(true);
                }}
                style={{ cursor: "pointer" }}
              >
                Faculty of Agriculture and Natural Sciences{" "}
                <span>
                  <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link className="non__before" to="/our-campuses">
            Campuses
          </Link>
          <ul className="dropdown">
            <li>
              <Link to="/">
                Bonaberi{" "}
                <span>
                  <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                Bonamoussadi{" "}
                <span>
                  <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                Bamenda{" "}
                <span>
                  <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                Yaounde{" "}
                <span>
                  <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                Ndu{" "}
                <span>
                  <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                </span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            style={{ fontWeight: "800", color: "var(--main-color)" }}
            href="https://nishangsys.com/stlouisapply"
          >
            Apply
          </a>
        </li>

        <li>
          <div></div>
        </li>

        <li className="non">
          <Link to="/">EN</Link>
        </li>
        <li className="non">
          <Link to="/">
            <AiOutlineSearch style={{ marginTop: "0.3rem" }} size={26} />
          </Link>
        </li>
        <PopupWidget show={showMenu} toggleState={toggleState} />
        <li className="non">
          <HiBars3BottomLeft
            onClick={() => setShowMenu(true)}
            style={{ marginTop: "0.3rem", cursor: "pointer" }}
            size={28}
          />
        </li>
      </ul>
      <ul className="mobile">
        <li>
          <Link to="/">EN</Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineSearch style={{ marginTop: "0.3rem" }} size={26} />
          </Link>
        </li>
        <li>
          <HiBars3BottomLeft
            onClick={() => setShowMenu(true)}
            style={{ marginTop: "0.3rem", cursor: "pointer" }}
            size={28}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
