/* eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
// import { FcApproval } from "react-icons/fc";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Slider from "../TextSlider/Slider";

// Icon(s)
// import { FaSearch } from "react-icons/fa";
import "./navbar.css";
import PopupWidget from "../popup-widget/PopupWidget";
import FacultyPopup from "../faculty-popup/FacultyPopup";
import {
  facultiesDataEN,
  facultiesDataFR,
} from "../../pages/faculties/Faculties";
import ProgramPopup from "../programmes/ProgramPopup";
import { useTranslation } from "react-i18next";
// import { SearchComponent } from "../../pages/landing/Landing";
import {
  getProgrammes,
  getFaculties,
  getCategories,
  getCourses,
} from "../../redux/reducers/app";

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
  // const [searchClicked, setSearchClicked] = useState(false);
  // const [input, setInput] = useState("");
  // const navigate = useNavigate();

  // const [selected, setSelected] = useState("");
  // const [selectedLevel, setSelectedLevel] = useState("");
  // const [selectedCampus, setSelectedCampus] = useState("");
  // const [selectedFaculty, setSelectedFaculty] = useState("");

  // const handleSearchIconClick = () => {
  //   setSearchClicked(true);
  //   const searchElement = document.getElementById("landing__search");

  //   if (searchElement) {
  //     // searchElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };
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
    <>
      <nav className={`navbar bg`}>
        <div className={`topNav`}>
          <ul>
            <li>
              <Link to="/news-and-events">{t("header_popup.news_events")}</Link>
            </li>
            <li>
              <Link to="/facilities">{t("header_popup.faculties")}</Link>
            </li>
            <li>
              <Link to="/application-and-admission">
                {t("header_popup.hta")}
              </Link>
            </li>
            <li>
              <Link to="/scholarships"> {t("header_popup.scholarship")}</Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="https://drive.google.com/file/d/1YeHgdwW60XqlO07ixf__0IEhSPKj-rGH/view?usp=drive_link"
              >
                {t("header_popup.student_guide")}
              </Link>
            </li>
            <li>
              <Link to="/handbook">{t("header_popup.handbook")}</Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="https://drive.google.com/file/d/10mGyssnKFADEbhsUjY_UG7caT4UDRzu7/view?usp=drive_link"
              >
                {t("header_popup.prospectus")}
              </Link>
            </li>
            <li>
              <Link to="/fees"> {t("header_popup.fees")}</Link>
            </li>
            <li>
              <Link to="/alumni"> {t("header_popup.alumni")}</Link>
            </li>
            <li>
              <Link to="/research"> {t("header_popup.research")}</Link>
            </li>
            <li>
              <Link to="/fill-form">{t("header_popup.contact")}</Link>
            </li>
          </ul>
          <Slider />
        </div>

        <div className={`bottomNav`}>
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
              <Link className="non__before" to="/about">
                {t("header.about")}
              </Link>
              <ul className="dropdown">
                <li>
                  <Link to="/why-us" style={{ cursor: "pointer" }}>
                    {t("header_popup.yslui")}
                    <span>
                      <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/our-values" style={{ cursor: "pointer" }}>
                    {t("header_popup.our_values")}
                    <span>
                      <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/leadership-team" style={{ cursor: "pointer" }}>
                    {t("header_popup.leadership")}
                    <span>
                      <AiOutlineArrowRight style={{ marginTop: "0.5rem" }} />
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="non__before"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setProgramsPanelActivated(true);
                }}
                to="/#"
              >
                {t("header.programmes")}
              </Link>
              <ul className="dropdown">
                {programmes?.map((item: any, index: number) => {
                  return (
                    <li key={index}>
                      <Link
                        to={`/program-details/${item._id}`}
                        style={{ cursor: "pointer" }}
                      >
                        {/* {t("header.fhbs")} */}
                        {item?.title}
                        <span>
                          <AiOutlineArrowRight
                            style={{ marginTop: "0.5rem" }}
                          />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
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
                          <AiOutlineArrowRight
                            style={{ marginTop: "0.5rem" }}
                          />
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
              className="translate"
            >
              <Link to="#" onClick={handleChangeLanguage}>
                {i18n.language === "en" ? "FR" : "EN"}
              </Link>
            </li>
            {/* {searchClicked ? (
              <SearchComponent
                selected={selected}
                setSelected={setSelected}
                selectedLevel={selectedLevel}
                setSelectedLevel={setSelectedLevel}
                selectedCampus={selectedCampus}
                setSelectedCampus={setSelectedCampus}
                selectedFaculty={selectedFaculty}
                setSelectedFaculty={setSelectedFaculty}
                setSearchClicked={() => setSearchClicked(false)}
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
            )} */}

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
            {/* {searchClicked ? (
              <SearchComponent
                selected={selected}
                setSelected={setSelected}
                selectedLevel={selectedLevel}
                setSelectedLevel={setSelectedLevel}
                selectedCampus={selectedCampus}
                setSelectedCampus={setSelectedCampus}
                selectedFaculty={selectedFaculty}
                setSelectedFaculty={setSelectedFaculty}
                setSearchClicked={() => setSearchClicked(false)}
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
            )} */}
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
