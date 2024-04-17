import { useEffect, useRef, useState } from "react";
import { Fade } from "react-reveal";
import "./landing.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Content from "../../components/content/Content";
import ContentWithBg from "../../components/content-with-bg/ContentWithBg";
import ProgramGrid from "../../components/program-grid/ProgramGrid";
import GridLayout from "../../components/grid/Grid";
import LeaderCard from "../../components/leader-card/LeaderCard";
import Event from "../../components/event/Event";
import { Link, useNavigate } from "react-router-dom";
import Membership from "../../components/membership/Membership";
import { useTranslation } from "react-i18next";
import SelectMolecule from "../../components/select/Select.molecule";
import { i18n } from "i18next";

import {
  getTeam,
  getEvents,
  getProgrammes,
  getCampuses,
  getFaculties,
  getCategories,
} from "../../redux/reducers/app";

export const programmesEN = [
  {
    // image: require("../../assets/converted/IVS_7525.jpg"),
    image: require("../../assets/optimized/IVS_6598.jpg"),
    desc: "More and more exciting programmes to be explored at our campuses.",
    label: "Bachelors",
    link: "/bachelors",
  },
  {
    image: require("../../assets/masters.jpg"),
    desc: "Explore our best masters programmes. Find a fit for yourself.",
    label: "Masters",
    link: "/masters",
  },
  {
    // image: '/pics/optimized/IVC_6598.jpg',
    // image: require("../../assets/optimized/IVC_0135.jpg"),
    image: require("../../assets/converted/IVS_7525.jpg"),
    desc: "We offer a variety of short courses. Explore today!",
    label: "Foundation",
    link: "/foundation",
  },
  {
    // image: '/pics/optimized/IVC_6598.jpg',
    // image: require("../../assets/optimized/IVS_6598.jpg"),
    image: require("../../assets/optimized/IVC_0135.jpg"),
    desc: "HND programmes are just so exciting, start a career in one of these programmes.",
    label: "HND",
    link: "/hnd",
  },
];

export const programmesFR = [
  {
    // image: require("../../assets/converted/IVS_7525.jpg"),
    image: require("../../assets/optimized/IVS_6598.jpg"),
    desc: "De plus en plus de programmes passionnants sont à découvrir sur nos campus.",
    label: "Bacheliers",
    link: "/bachelors",
  },
  {
    image: require("../../assets/masters.jpg"),
    desc: "Découvrez nos meilleurs masters. Trouvez celui qui vous convient.",
    label: "Maîtres",
    link: "/masters",
  },
  {
    // image: '/pics/optimized/IVC_6598.jpg',
    // image: require("../../assets/optimized/IVC_0135.jpg"),
    image: require("../../assets/converted/IVS_7525.jpg"),
    desc: "Nous proposons une variété de cours de courte durée. Découvrez-les dès aujourd'hui !",
    label: "Cours de Courte Durée",
    link: "/foundation",
  },
  {
    // image: '/pics/optimized/IVC_6598.jpg',
    // image: require("../../assets/optimized/IVS_6598.jpg"),
    image: require("../../assets/optimized/IVC_0135.jpg"),
    desc: "Les programmes HND sont tout simplement passionnants, commencez une carrière dans l'un de ces programmes.",
    label: "HND",
    link: "/hnd",
  },
];

const handleSearchNavigation = (
  selected: any,
  selectedLevel: any,
  selectedCampus: any,
  filteredFaculty: any,
  navigate: Function,
  input: string
) => {
  if (selected && selectedCampus && filteredFaculty) {
    const param = `/program-search/${selected._id}/${selectedLevel._id}/${filteredFaculty._id}`;
    navigate(param);
    // const param = (tag: string) =>
    //   input.toLowerCase().split(" ").join("-").concat(`-${tag}`);
    // switch (selected) {
    //   case "HND":
    //     if (input) {
    //       navigate(`/programme?id=${param("hnd")}`);
    //     } else {
    //       navigate("/hnd");
    //     }
    //     break;
    //   case "Foundation":
    //   case "Cours de Courte Durée":
    //     navigate("/foundation");
    //     break;
    //   case "Bachelors":
    //   case "Bacheliers":
    //     if (input) {
    //       navigate(`/programme?id=${param("bsc")}`);
    //     } else {
    //       navigate("/bachelors");
    //     }
    //     break;
    //   case "Masters":
    //   case "Maîtres":
    //     if (input) {
    //       navigate(`/programme?id=${param("bsc")}`);
    //     } else {
    //       navigate("/masters");
    //     }
    //     break;
    //   default:
    //     break;
    // }
  }
};

export const SearchComponent = ({
  selected,
  setSelected,
  selectedLevel,
  setSelectedLevel,
  selectedCampus,
  setSelectedCampus,
  selectedFaculty,
  setSelectedFaculty,
  setSearchClicked,
  input,
  setInput,
  navigate,
  i18n,
  t,
  fadeDir,
  delay,
  className,
}: {
  selected: any;
  setSelected: Function;
  selectedLevel: any;
  setSelectedLevel: Function;
  selectedCampus: any;
  setSelectedCampus: Function;
  selectedFaculty: any;
  setSelectedFaculty: Function;
  setSearchClicked: Function;
  input: string;
  setInput: Function;
  navigate: Function;
  i18n: i18n;
  t: Function;
  fadeDir?: string;
  delay?: number;
  className?: string;
}) => {
  const [suggestions, setSuggestions] = useState<any[]>([]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const value = e.target.value;
  //   setInput(value);

  //   if (value.trim() !== "") {
  //     switch (selected) {
  //       case "HND":
  //         const filteredSuggestions = hndProgramsEN
  //           .flatMap((program) => program.list)
  //           .filter((prog) =>
  //             prog.toUpperCase().startsWith(value.toUpperCase())
  //           );

  //         setSuggestions(filteredSuggestions);
  //         break;
  //       case "Bachelors":
  //       case "Bacheliers":
  //         const filteredBachelorsSuggestions = bachelorsProgramsEN
  //           .flatMap((program) => program.list)
  //           .filter((prog) =>
  //             prog.toUpperCase().startsWith(value.toUpperCase())
  //           );
  //         setSuggestions(filteredBachelorsSuggestions);
  //         break;
  //       case "Masters":
  //       case "Maîtres":
  //         const filteredMastersSuggestions = mastersProgramsEN
  //           .flatMap((program) => program.list)
  //           .filter((prog) =>
  //             prog.toUpperCase().startsWith(value.toUpperCase())
  //           );
  //         setSuggestions(filteredMastersSuggestions);
  //         break;
  //       default:
  //         break;
  //     }
  //   } else {
  //     setSuggestions([]);
  //   }
  // };

  const handleSuggestionClick = (suggestion: any) => {
    setInput(suggestion); // Set input value to the clicked suggestion
    setSuggestions([]); // Clear suggestions
  };

  const [programmes, setProgrammes] = useState<any[]>([]);
  const [programmesFiltered, setProgrammesFiltered] = useState<any[]>([]);

  const [campuses, setCampuses] = useState<any[]>([]);
  const [filteredCampuses, setFilteredCampuses] = useState<any[]>([]);
  const [isFrenchCampuses, setIsFrenchCampuses] = useState<any[]>([]);

  const [faculties, setFaculties] = useState<any[]>([]);
  const [filteredFaculty, setFilteredFaculty] = useState<any>(null);
  const [isFrenchFaculty, setIsFrenchFaculty] = useState<any>([]);

  const [levels, setLevels] = useState<any[]>([]);
  const [filteredLevels, setFilteredLevels] = useState<any[]>([]);
  const [isFrenchLevels, setIsFrenchLevels] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (selected && selectedLevel && selectedCampus && filteredFaculty) {
      setSearchClicked(false);
    }
    handleSearchNavigation(
      selected,
      selectedLevel,
      selectedCampus,
      filteredFaculty,
      navigate,
      input
    );
  };

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
  const handlerGetLevels = async () => {
    try {
      setLoading(true);
      await getCategories()
        .then((res: any) => {
          if (res.status === 200) {
            setLevels(res.data);
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
  const handlerGetCampuses = async () => {
    try {
      setLoading(true);
      await getCampuses()
        .then((res: any) => {
          if (res.status === 200) {
            setCampuses(res.data);
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

  useEffect(() => {
    handlerGetFaculties();
    handlerGetLevels();
    handlerGetCampuses();
    handlerGetProgrammes();
  }, []);

  const filterLevel = () => {
    if (selected && selected._id && levels) {
      const filtered = levels.filter((item) =>
        item.programmeID.includes(selected._id)
      );
      setFilteredLevels(filtered);
    } else {
      setFilteredLevels([]);
    }
  };

  const filterCampus = () => {
    if (selected && selected?._id && campuses) {
      const JSONCampuses = JSON.parse(selected?.campusID);
      const filtered = campuses.filter((item) =>
        JSONCampuses.includes(item._id)
      );
      setFilteredCampuses(filtered);
    } else {
      setFilteredCampuses([]);
    }
  };

  const filterFaculty = () => {
    if (selectedLevel && selectedLevel?._id && isFrenchFaculty) {
      const filtered = isFrenchFaculty.filter(
        (item: any) => item._id === selectedLevel.facultyID
      )[0];
      setFilteredFaculty(filtered);
    } else {
      setFilteredFaculty(null);
    }
  };

  useEffect(() => {
    filterLevel();
    filterCampus();
  }, [selected]);

  useEffect(() => {
    filterFaculty();
  }, [selectedLevel]);

  useEffect(() => {
    filterData();
  }, [i18n.language, selected, filteredLevels]);

  useEffect(() => {
    filterData();
  }, [programmes, filteredCampuses, filteredFaculty, filteredLevels]);

  const filterData = () => {
    if (i18n.language === "fr") {
      const programFilter = programmes.filter((item: any) => item.isFrench);
      setProgrammesFiltered(programFilter);

      const campusFilter = filteredCampuses.filter(
        (item: any) => item.isFrench
      );
      setIsFrenchCampuses(campusFilter);

      const facultyFilter = faculties.filter((item: any) => item.isFrench);
      setIsFrenchFaculty(facultyFilter);

      const levelFilter = filteredLevels.filter((item: any) => item.isFrench);
      setIsFrenchLevels(levelFilter);
    } else {
      const programFilter = programmes.filter((item: any) => !item.isFrench);
      setProgrammesFiltered(programFilter);

      const campusFilter = filteredCampuses.filter(
        (item: any) => !item.isFrench
      );
      setIsFrenchCampuses(campusFilter);

      const facultyFilter = faculties.filter((item: any) => !item.isFrench);
      setIsFrenchFaculty(facultyFilter);

      const levelFilter = filteredLevels.filter((item: any) => !item.isFrench);
      setIsFrenchLevels(levelFilter);
    }
  };

  return (
    <Fade
      bottom={fadeDir === "bottom"}
      right={fadeDir === "right"}
      delay={delay ? delay : 500}
    >
      <div className={`landing__search ${className && className}`}>
        <SelectMolecule
          list={programmesFiltered}
          selected={selected}
          onSelect={(data: string) => {
            setSelected(data);
          }}
          program={"Programme"}
        />

        <SelectMolecule
          list={isFrenchLevels}
          selected={selectedLevel}
          onSelect={(data: string) => {
            setSelectedLevel(data);
          }}
          program={"Level"}
        />

        <SelectMolecule
          list={isFrenchCampuses}
          selected={selectedCampus}
          onSelect={(data: string) => {
            setSelectedCampus(data);
          }}
          program={"Campus"}
        />

        {/* <SelectMolecule
          list={faculties}
          selected={selectedFaculty}
          onSelect={(data: string) => {
            setSelectedFaculty(data);
          }}
          program={"Faculty"}
        /> */}

        <input
          type="text"
          value={filteredFaculty?.title || ""}
          // onChange={handleChange}
          placeholder="Faculty"
        />

        {/* <input
          type="text"
          value={selectedFaculty?.title || ""}
          // onChange={handleChange}
          placeholder={
            suggestions.length > 0
              ? suggestions[0].title
              : t("landing.search_field_data")
          }
        /> */}

        <button onClick={handleSearch}>{t("landing.search_field")}</button>
      </div>
      <Fade top>
        {suggestions.length > 0 && (
          <ul
            style={{
              backgroundColor: "white",
              textDecoration: "none",
              fontSize: "17px",
              padding: "1rem",
            }}
          >
            {suggestions.map((suggestion, index) => (
              <li
                style={{ listStyle: "none", margin: "1rem", cursor: "pointer" }}
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </Fade>
    </Fade>
  );
};

const Landing = () => {
  // const width = window.innerWidth;
  const listRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [selected, setSelected] = useState({});
  const [selectedLevel, setSelectedLevel] = useState({});
  const [selectedCampus, setSelectedCampus] = useState({});
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const [searchClicked, setSearchClicked] = useState(false);

  // const [selected, setSelected] = useState(
  //   i18n.language === "en" ? programsEn[0] : programsFR[0]
  // );
  // const [selectedCampus, setSelectedCampus] = useState(
  //   i18n.language === "en" ? campusEn[0] : campusFR[0]
  // );
  // const [selectedFaculty, setSelectedFaculty] = useState(
  //   i18n.language === "en" ? campusEn[0] : campusFR[0]
  // );

  // const searchRef = useRef<HTMLInputElement>(null);
  // const searchFunc = () => {
  //   if (selected.length > 0 && input.length === 0) {
  //     if (selected === "HND") {
  //       navigate("/hnd");
  //     } else if (
  //       selected === "Foundation" ||
  //       selected === "Cours de Courte Durée"
  //     ) {
  //       navigate("/foundation");
  //     } else if (selected === "Bachelors" || selected === "Bacheliers") {
  //       navigate("/bachelors");
  //     } else if (selected === "Masters" || selected === "Maîtres") {
  //       navigate("/masters");
  //     }
  //   }

  //   // if (selected.length > 0 && input.length > 0) {
  //   //   navigate(`/${selected}/${input}`);
  //   // }
  // };

  // const language = i18n.language;
  // const programmes = language === FR ? programmesFR : programmesEN;
  // const events = language === FR ? eventsFR : eventsEN;
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (listRef.current) {
        listRef.current.scrollLeft += 2;
      }
    }, 3);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [team, setTeam] = useState([]);
  const [isFrenchTeam, setIsFrenchTeam] = useState([]);
  const [events, setEvents] = useState([]);
  const [isFrechEvents, setIsFrenchEvents] = useState([]);
  const [programmes, setProgrammes] = useState([]);
  const [isFrenchProgrammes, setIsFrenchProgrammes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlerGetTeam = async () => {
    try {
      setLoading(true);
      await getTeam()
        .then((res: any) => {
          if (res.status === 200) {
            setTeam(res.data);
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

  const handlerGetEvents = async () => {
    try {
      setLoading(true);
      await getEvents()
        .then((res: any) => {
          if (res.status === 200) {
            setEvents(res.data);
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

  useEffect(() => {
    handlerGetTeam();
    handlerGetEvents();
    handlerGetProgrammes();
  }, []);

  // Background Image Slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/pics/optimized/ivs-7545.webp",
    "/pics/optimized/IVC_0135.jpg",
    "/pics/optimized/IVS_6598.jpg",
    "/pics/optimized/ivs-6804.webp",
    "/pics/optimized/ivs-7466.webp",
    "/pics/optimized/ivs-7478.webp",
    "/pics/optimized/ivs-7536.webp",
  ];
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const startSlider = () => {
    setInterval(nextImage, 3000);
  };
  useEffect(() => {
    startSlider();
  }, []);

  useEffect(() => {
    filterData();
  }, [i18n.language]);

  useEffect(() => {
    filterData();
  }, [team, events, programmes]);

  const filterData = () => {
    if (i18n.language === "fr") {
      const teamFilter = team.filter((item: any) => item.isFrench);
      setIsFrenchTeam(teamFilter);

      const eventFilter = events.filter((item: any) => item.isFrench);
      setIsFrenchEvents(eventFilter);

      const programFilter = programmes.filter((item: any) => item.isFrench);
      setIsFrenchProgrammes(programFilter);
    } else {
      const teamFilter = team.filter((item: any) => !item.isFrench);
      setIsFrenchTeam(teamFilter);

      const eventFilter = events.filter((item: any) => !item.isFrench);
      setIsFrenchEvents(eventFilter);

      const programFilter = programmes.filter((item: any) => !item.isFrench);
      setIsFrenchProgrammes(programFilter);
    }
  };

  return (
    <div className="landing">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <h3>{t("about.name")}</h3>
        <Fade left>
          <h2>{t("landing.character")}</h2>
        </Fade>
        {/* <div className="apply-now">
          <a
            href="https://apply.stlouissystems.org/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              {t("landing.addmision")} <p>{t("landing.click_here")}</p>
            </button>
          </a>
        </div> */}
        <SearchComponent
          selected={selected}
          setSelected={setSelected}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          selectedCampus={selectedCampus}
          setSelectedCampus={setSelectedCampus}
          selectedFaculty={selectedFaculty}
          setSelectedFaculty={setSelectedFaculty}
          setSearchClicked={setSearchClicked}
          input={input}
          setInput={setInput}
          navigate={navigate}
          t={t}
          i18n={i18n}
          fadeDir="bottom"
        />
        {/*<Fade bottom delay={500}>
          <div
            className="landing__search">
            <SelectMolecule
              list={i18n.language === "fr" ? programsFR : programsEn}
              selected={selected}
              onSelect={(data) => {
                setSelected(data);
              }}
            />

            <input
              ref={searchRef}
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder={t("landing.search_field_data")}
            />
            <button onClick={searchFunc}>{t("landing.search_field")}</button>
          </div>
            </Fade> */}
      </div>
      <div className="about">
        <div className="desc">
          <Fade up>
            <h2>{t("landing.we_shape")}</h2>
          </Fade>
          <h4>{t("landing.we_shape_desc")}</h4>
        </div>
      </div>

      <div className="content__section">
        <Content
          direction="RIGHT"
          caption={t("landing.approach")}
          title={t("landing.approach_title")}
          subText={t("landing.approach_subText")}
          description=""
          refLink="/core-principles"
          btnText={t("landing.core_principles")}
          img="/pics/converted/IVS_6945.webp"
        />
      </div>

      <div className="content__section">
        <Content
          direction="LEFT"
          caption=""
          title={t("landing.engaging")}
          subText=""
          description={t("landing.engaging_desc")}
          refLink="/why-us"
          btnText={t("landing.why_us")}
          img="/pics/converted/IVS_6879.webp"
        />
      </div>

      <div className="content__section">
        <ContentWithBg
          direction="RIGHT"
          caption={t("landing.find_buddy")}
          title={t("landing.find_buddy_title")}
          subText=""
          description={t("landing.buddy_desc")}
          refLink="/meet-your-slui-buddy"
          btnText={t("landing.meet_buddy")}
          img="/pics/converted/IVS_7619.webp"
        />
      </div>

      <div className="programs_">
        <div className="headline">
          <h2>{t("landing.leader_ship_team")}</h2>
        </div>
        <div className="grid__ref">
          <GridLayout columns={4} gap={2}>
            {isFrenchTeam && isFrenchTeam.length > 0 ? (
              isFrenchTeam
                .map(
                  (
                    item: {
                      name: string;
                      profession: string;
                      _id: string;
                      image: string;
                      isManagement: boolean;
                    },
                    index
                  ) => {
                    if (item?.isManagement) {
                      return (
                        <Link to={`/leadership-team/${item._id}`} key={index}>
                          <LeaderCard
                            image={`${process.env.REACT_APP_BASE_URL}/uploads/gallery/${item?.image}`}
                            name={item.name}
                            title={item.profession}
                          />
                        </Link>
                      );
                    } else {
                      return null;
                    }
                  }
                )
                .reverse()
            ) : (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ fontSize: 20 }}>No Data Found</p>
              </div>
            )}
          </GridLayout>
          {/* <Link to={"leadership-team"}>
            <button
              style={{
                padding: "1.5rem 3rem",
                borderRadius: "5px",
                background: "var(--main-color)",
                fontSize: "1.6rem",
                cursor: "pointer",
                marginTop: "2rem",
                outline: "none",
                border: "none",
                color: "#fff",
                float: "right",
                marginBottom: "10rem",
              }}
            >
              {t("landing.view_more")}
            </button>
          </Link> */}
        </div>
      </div>

      <div className="events">
        <div className="custom_section">
          <div>
            <p className="caption">{t("landing.meet_online")}</p>
            <p className="heading">{t("landing.online_hybrid")}</p>
          </div>
          <div>
            <p className="subcaption">{t("landing.meet_online_cap")}</p>
            {/* <Link
              to={"/news-and-events"}
              style={{
                textDecoration: "none",
                padding: "1.5rem 3rem",
                borderRadius: "5px",
                background: "var(--main-color)",
                fontSize: "1.6rem",
                cursor: "pointer",
                marginTop: "2rem",
                outline: "none",
                border: "none",
                color: "#fff",
                float: "right",
              }}
            >
              {t("landing.all_events")}
            </Link> */}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            padding: "0 4vw",
            paddingBottom: "52px",
          }}
        >
          <Fade right>
            <Carousel
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={2000}
              infinite={true}
            >
              {isFrechEvents.map((event, index) => (
                <div
                  style={{
                    margin: "0 10px",
                    height: "100%",
                  }}
                  key={index}
                >
                  <Event key={index} event={event} link={"event-details"} />
                </div>
              ))}
            </Carousel>
          </Fade>
        </div>
      </div>

      <div className="programs_">
        <div className="headline">
          <h3>{t("landing.just_fit")}</h3>
          <h2>{t("landing.exciting_programs")}</h2>
        </div>
        <ProgramGrid programs={isFrenchProgrammes} />
      </div>

      <div className="programs_">
        <div className="headline">
          <h2>{t("landing.membership_partnership")}</h2>
        </div>
        <Membership />
      </div>
    </div>
  );
};

export default Landing;
