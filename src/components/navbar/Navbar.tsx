/* eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { HiBars3BottomLeft } from "react-icons/hi2";

// Icon(s)
import { FaSearch } from "react-icons/fa";

// styles
import "./navbar.css";

import PopupWidget from "../popup-widget/PopupWidget";
import FacultyPopup from "../faculty-popup/FacultyPopup";
import {
  facultiesDataEN,
  facultiesDataFR,
} from "../../pages/faculties/Faculties";
import ProgramPopup from "../programmes/ProgramPopup";
import { useTranslation } from "react-i18next";
import {
  SearchComponent,
  // programsEn as listProgramsEn,
  // programsFR as listProgramsFr,
} from "../../pages/landing/Landing";
import {
  getProgrammes,
  getFaculties,
  getCategories,
  getCourses,
} from "../../redux/reducers/app";

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

const campusEn = ["Bonaberi", "Bonamoussadi", "Yaounde", "Ndu", "Bamenda"];
const campusFR = ["Bonaberi", "Bonamoussadi", "Yaounde", "Ndu", "Bamenda"];

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

  // For the search
  const [searchClicked, setSearchClicked] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const [selected, setSelected] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");

  // const [selected, setSelected] = useState(
  //   i18n.language === "en" ? listProgramsEn[0] : listProgramsFr[0]
  // );
  // const [selectedCampus, setSelectedCampus] = useState(
  //   i18n.language === "en" ? campusEn[0] : campusFR[0]
  // );
  // const [selectedFaculty, setSelectedFaculty] = useState(
  //   i18n.language === "en" ? campusEn[0] : campusFR[0]
  // );

  const handleSearchIconClick = () => {
    setSearchClicked(true);
    const searchElement = document.getElementById("landing__search");

    if (searchElement) {
      // searchElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

  const [programmes, setProgrammes] = useState([]);
  const [faculties, setFaculties] = useState<any>([]);
  const [departments, setDepartments] = useState<any>([]);
  const [filteredDepartment, setFilteredDepartment] = useState<any>([]);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourse] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handlerGetProgrammes = async () => {
    try {
      setLoading(true);
      await getProgrammes()
        .then((res: any) => {
          if (res.status === 200) {
            setProgrammes(res.data);
            setLoading(false);
            return;
          }
          setLoading(false);
        })
        .catch((err: any) => {
          console.error(err);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const handlerGetFaculties = async () => {
    try {
      setLoading(true);
      await getFaculties()
        .then((res: any) => {
          if (res.status === 200) {
            setFaculties(res.data);
            setLoading(false);
            return;
          }
          setLoading(false);
        })
        .catch((err: any) => {
          console.error(err);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const handlerGetDepartments = async () => {
    try {
      setLoading(true);
      await getCategories()
        .then((res: any) => {
          if (res.status === 200) {
            setDepartments(res.data);
            setLoading(false);
            return;
          }
          setLoading(false);
        })
        .catch((err: any) => {
          console.error(err);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const handlerGetCourses = async () => {
    try {
      setLoading(true);
      await getCourses()
        .then((res: any) => {
          if (res.status === 200) {
            setCourses(res.data);
            setLoading(false);
            return;
          }
          setLoading(false);
        })
        .catch((err: any) => {
          console.error(err);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const filterDept = () => {
    const filtered = departments.filter(
      (item: any) => item.facultyID === faculties[activePanelIndex]?._id
    );
    setFilteredDepartment(filtered);
  };

  const filterCourses = () => {
    const filteredCoursesByCategory: any[] = [];

    filteredDepartment.forEach((item: any) => {
      const filtered = courses.filter(
        (crs: any) => crs.programType === item._id
      );
      filteredCoursesByCategory.push({
        programCategory: item,
        courses: filtered,
      });
    });

    return setFilteredCourse(filteredCoursesByCategory);
  };

  useEffect(() => {
    handlerGetCourses();
    handlerGetFaculties();
    handlerGetProgrammes();
    handlerGetDepartments();
  }, []);

  useEffect(() => {
    filterDept();
  }, [activePanelIndex]);

  useEffect(() => {
    filterCourses();
  }, [filteredDepartment, courses]);

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
            title={faculties[activePanelIndex]?.title}
            desc={faculties[activePanelIndex]?.details}
            subDesc={faculties[activePanelIndex]?.subDesc}
            programs={filteredCourses}
          />
        </div>
      )}

      {programsPanelActivated && (
        <div
          onClick={() => {
            setProgramsPanelActivated(false);
          }}
        >
          <ProgramPopup programs={programmes} />
        </div>
      )}
      <div className="logo desktop">
        <Link to="/">
          <img src="/images/logo_red.webp" alt="logo" />
        </Link>
      </div>
      <div className="logo mobile">
        <Link to="/">
          <img src="/logos/logomobile.png" alt="logo" />
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
            {faculties?.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <a
                    href="#"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      setActivePanelIndex(index);
                      setActivePanel(true);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {/* {t("header.fhbs")} */}
                    {item?.title}
                    <span>
                      <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                    </span>
                  </a>
                </li>
              );
            })}
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
        {searchClicked ? (
          <SearchComponent
            selected={selected}
            setSelected={setSelected}
            selectedCampus={selectedCampus}
            setSelectedCampus={setSelectedCampus}
            selectedFaculty={selectedFaculty}
            setSelectedFaculty={setSelectedFaculty}
            input={input}
            setInput={setInput}
            navigate={navigate}
            t={t}
            i18n={i18n}
            fadeDir="right"
            delay={100}
            className="landing__search__navbar"
          />
        ) : (
          <FaSearch
            onClick={handleSearchIconClick}
            size="22px"
            style={{
              cursor: "pointer",
              fontWeight: "800",
              color: "var(--main-color)",
            }}
          />
        )}

        <PopupWidget
          togglePopup={setProgramsPanelActivated}
          show={showMenu}
          toggleState={toggleState}
        />
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
        {searchClicked ? (
          <SearchComponent
            selected={selected}
            setSelected={setSelected}
            selectedCampus={selectedCampus}
            setSelectedCampus={setSelectedCampus}
            selectedFaculty={selectedFaculty}
            setSelectedFaculty={setSelectedFaculty}
            input={input}
            setInput={setInput}
            navigate={navigate}
            t={t}
            i18n={i18n}
            fadeDir="right"
            delay={100}
            className="landing__search__navbar"
          />
        ) : (
          <FaSearch
            onClick={handleSearchIconClick}
            size="22px"
            style={{
              cursor: "pointer",
              fontWeight: "800",
              color: "var(--main-color)",
            }}
          />
        )}
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
