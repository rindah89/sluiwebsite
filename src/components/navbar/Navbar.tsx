/* eslint-disable */

import React, { useEffect, useRef, useState } from "react";
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

import PopupWidget from "../popup-widget/PopupWidget";
import FacultyPopup from "../faculty-popup/FacultyPopup";
import {
  facultiesDataEN,
  facultiesDataFR,
} from "../../pages/faculties/Faculties";
import ProgramPopup from "../programmes/ProgramPopup";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const programsEn = [
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
    link: "/foundation",
  },
  {
    icon: (
      <>
        <FcApproval style={{ marginTop: "0.2rem" }} size={30} />
      </>
    ),
    title: "Bachelors",
    desc: "Your start to an international career. Health, Agriculture, Engineering and Technology industries have never been so diverse. The modern range of courses offered by ST. LOUIS UNIVERSITY INSTITUTE holds the right degree programme for every talent.",
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
];

const programsFR = [
  {
    icon: (
      <>
        <FcApproval style={{ marginTop: "0.2rem" }} size={30} />
      </>
    ),
    title: "HND",
    desc: "Découvrez les opportunités et votre chemin vers une carrière de rêve dans le secteur de la santé, de l'agriculture, de l'ingénierie et de la technologie.",
    link: "/hnd",
  },
  {
    icon: (
      <>
        <FcApproval style={{ marginTop: "0.2rem" }} size={30} />
      </>
    ),
    title: "Foundation",
    desc: "Le nouveau programme SLUI International Medical Foundation est un cours de base au Cameroun qui vous permet d'acquérir les connaissances et les compétences nécessaires pour répondre aux exigences d'entrée dans les facultés de médecine à l'étranger.",
    link: "/foundation",
  },
  {
    icon: (
      <>
        <FcApproval style={{ marginTop: "0.2rem" }} size={30} />
      </>
    ),
    title: "Bacheliers",
    desc: "Le point de départ d'une carrière internationale. Les secteurs de la santé, de l'agriculture, de l'ingénierie et de la technologie n'ont jamais été aussi diversifiés. La gamme moderne de cours proposés par l'INSTITUT UNIVERSITAIRE ST. LOUIS UNIVERSITY INSTITUTE offre un programme diplômant adapté à chaque talent.",
    link: "/bachelors",
  },
  {
    icon: (
      <>
        <FcApproval style={{ marginTop: "0.2rem" }} size={30} />
      </>
    ),
    title: "Maîtres",
    desc: "L'Institut universitaire St Louis offre aux travailleurs de toutes les régions du monde la possibilité de poursuivre leurs études et d'obtenir des diplômes de qualité tout en continuant à travailler à 100 % sur leur lieu de travail. Nous proposons actuellement 9 programmes d'études de master.",
    link: "/masters",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const toggleState = () => {
    setShowMenu(false);
  };

  const [activePanelIndex, setActivePanelIndex] = useState<number>(0);
  const [activePanel, setActivePanel] = useState(false);

  const [programsPanelActivated, setProgramsPanelActivated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const elementId = (event?.target as any)?.id;
      if (elementId === "mainRef") {
        setActivePanel(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChangeLanguage = (e: any) => {
    e.preventDefault();

    if (i18n.language === "en") {
      i18n.changeLanguage("fr");
    } else {
      i18n.changeLanguage("en");
    }
  };

  const facultiesData =
    i18n.language === "fr" ? facultiesDataFR : facultiesDataEN;
  return (
    <nav className={`navbar bg`}>
      {activePanel && (
        <div
          // onClick={() => {
          //   setActivePanel(false);
          // }}
          ref={ref}
        >
          <FacultyPopup
            title={facultiesData[activePanelIndex].title}
            desc={facultiesData[activePanelIndex].desc}
            subDesc={facultiesData[activePanelIndex].subDesc}
            programs={facultiesData[activePanelIndex].programs}
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
            programs={i18n.language === "en" ? programsEn : programsFR}
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
          <Link to="/about">{t("header.about")}</Link>
        </li>
        <li>
          <a
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              setProgramsPanelActivated(true);
            }}
            href="/#"
          >
            {t("header.programmes")}
          </a>
        </li>
        <li>
          <Link className="non__before" to="/our-faculties">
            {t("header.faculties")}
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
                {t("header.fhbs")}
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
                {t("header.fet")}
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
                {t("header.fans")}
                <span>
                  <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/our-campuses">{t("header.campuses")}</Link>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            style={{ fontWeight: "800", color: "var(--main-color)" }}
            href="https://apply.stlouissystems.org/"
          >
            {t("header.apply")}
          </a>
        </li>

        <li
          style={{
            maxWidth: "fit-content",
          }}
        >
          <div></div>
        </li>

        <li
          style={{
            maxWidth: "fit-content",
          }}
          className="non"
        >
          <Link to="#" onClick={handleChangeLanguage}>
            {i18n.language === "en" ? "FR" : "EN"}
          </Link>
        </li>
        <li
          style={{
            maxWidth: "fit-content",
          }}
          className="non"
        >
          <Link to="/">
            <AiOutlineSearch style={{ marginTop: "0.3rem" }} size={26} />
          </Link>
        </li>
        <PopupWidget show={showMenu} toggleState={toggleState} />
        <li
          style={{
            maxWidth: "100%",
          }}
          className="non"
        >
          <HiBars3BottomLeft
            onClick={() => setShowMenu(true)}
            style={{ marginTop: "0.3rem", cursor: "pointer" }}
            size={28}
          />
        </li>
      </ul>
      <ul className="mobile">
        <li
          style={{
            maxWidth: "fit-content",
          }}
        >
          <Link to="#" onClick={handleChangeLanguage}>
            {i18n.language === "en" ? "FR" : "EN"}
          </Link>
        </li>
        <li
          style={{
            maxWidth: "fit-content",
          }}
        >
          <Link to="/">
            <AiOutlineSearch style={{ marginTop: "0.3rem" }} size={26} />
          </Link>
        </li>
        <li
          style={{
            maxWidth: "fit-content",
          }}
        >
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
