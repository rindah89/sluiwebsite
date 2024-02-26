import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-reveal";

// styles
import "./landing.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// components
import Content from "../../components/content/Content";
import ContentWithBg from "../../components/content-with-bg/ContentWithBg";
import ProgramGrid from "../../components/program-grid/ProgramGrid";
import GridLayout from "../../components/grid/Grid";
import LeaderCard from "../../components/leader-card/LeaderCard";
import Event from "../../components/event/Event";
import { Link, useNavigate } from "react-router-dom";
import { eventsEN, eventsFR } from "../news&events/News&events";
import Membership from "../../components/membership/Membership";
import { useTranslation } from "react-i18next";
import SelectMolecule from "../../components/select/Select.molecule";
import { i18n } from "i18next";
import { hndProgramsEN } from "../hnd/HND";
import { bachelorsProgramsEN } from "../bachelors/Bachelors";
import { mastersProgramsEN } from "../masters/Masters";

const FR = "fr";
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

export const programsEn = ["HND", "Foundation", "Bachelors", "Masters"];
export const programsFR = [
  "HND",
  "Cours de Courte Durée",
  "Bacheliers",
  "Maîtres",
];

// Helper function for language-specific programs
const getLanguagePrograms = (language: string) => {
  return language === FR ? programsFR : programsEn;
};

// Helper function to navigate based on selection
const handleSearchNavigation = (
  selected: string,
  navigate: Function,
  input: string
) => {
  if (selected.length > 0) {
    const param = (tag: string) =>
      input.toLowerCase().split(" ").join("-").concat(`-${tag}`);
    switch (selected) {
      case "HND":
        if (input) {
          navigate(`/programme?id=${param("hnd")}`);
        } else {
          navigate("/hnd");
        }
        break;
      case "Foundation":
      case "Cours de Courte Durée":
        navigate("/foundation");
        break;
      case "Bachelors":
      case "Bacheliers":
        if (input) {
          navigate(`/programme?id=${param("bsc")}`);
        } else {
          navigate("/bachelors");
        }
        break;
      case "Masters":
      case "Maîtres":
        if (input) {
          navigate(`/programme?id=${param("bsc")}`);
        } else {
          navigate("/masters");
        }
        break;
      default:
        break;
    }
  }
};

export const SearchComponent = ({
  selected,
  setSelected,
  input,
  setInput,
  navigate,
  i18n,
  t,
  fadeDir,
  delay,
  className,
}: {
  selected: string;
  setSelected: Function;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setInput(value);

    if (value.trim() !== "") {
      switch (selected) {
        case "HND":
          const filteredSuggestions = hndProgramsEN
            .flatMap((program) => program.list)
            .filter((prog) =>
              prog.toUpperCase().startsWith(value.toUpperCase())
            );

          setSuggestions(filteredSuggestions);
          break;
        case "Bachelors":
        case "Bacheliers":
          const filteredBachelorsSuggestions = bachelorsProgramsEN
            .flatMap((program) => program.list)
            .filter((prog) =>
              prog.toUpperCase().startsWith(value.toUpperCase())
            );
          setSuggestions(filteredBachelorsSuggestions);
          break;
        case "Masters":
        case "Maîtres":
          const filteredMastersSuggestions = mastersProgramsEN
            .flatMap((program) => program.list)
            .filter((prog) =>
              prog.toUpperCase().startsWith(value.toUpperCase())
            );
          setSuggestions(filteredMastersSuggestions);
          break;
        default:
          break;
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: any) => {
    setInput(suggestion); // Set input value to the clicked suggestion
    setSuggestions([]); // Clear suggestions
  };

  const handleSearch = () => {
    handleSearchNavigation(selected, navigate, input);
  };

  return (
    <Fade
      bottom={fadeDir === "bottom"}
      right={fadeDir === "right"}
      delay={delay ? delay : 500}
    >
      <div className={`landing__search ${className && className}`}>
        <SelectMolecule
          list={getLanguagePrograms(i18n.language)}
          selected={selected}
          onSelect={(data: string) => {
            setSelected(data);
          }}
        />

        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder={
            suggestions.length > 0
              ? suggestions[0].title
              : t("landing.search_field_data")
          }
        />

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
  const width = window.innerWidth;
  const listRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(
    i18n.language === "en" ? programsEn[0] : programsFR[0]
  );

  const searchRef = useRef<HTMLInputElement>(null);
  const searchFunc = () => {
    if (selected.length > 0 && input.length === 0) {
      if (selected === "HND") {
        navigate("/hnd");
      } else if (
        selected === "Foundation" ||
        selected === "Cours de Courte Durée"
      ) {
        navigate("/foundation");
      } else if (selected === "Bachelors" || selected === "Bacheliers") {
        navigate("/bachelors");
      } else if (selected === "Masters" || selected === "Maîtres") {
        navigate("/masters");
      }
    }

    // if (selected.length > 0 && input.length > 0) {
    //   navigate(`/${selected}/${input}`);
    // }
  };

  const language = i18n.language;
  const programmes = language === FR ? programmesFR : programmesEN;
  const events = language === FR ? eventsFR : eventsEN;
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

  return (
    <div className="landing">
      <div className="hero">
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
          refLink="/core-principles"
          btnText={t("landing.core_principles")}
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
            <Link to={`/leadership-team/1`}>
              <LeaderCard
                image="/images/nick.jpeg"
                name="Dr. Nick Ngwanyam"
                title={t("landing.president")}
              />
            </Link>

            <Link to={`/leadership-team/2`}>
              <LeaderCard
                image="/images/krishna.png"
                name="Prof. Krishna N. Sharma"
                title={t("Vice-Chancellor")}
              />
            </Link>

            <Link to={`/leadership-team/3`}>
              <LeaderCard
                image="/images/florence.jpg"
                name="Dr. Manjong Florence"
                title={t("landing.dvcaa")}
              />
            </Link>

            <Link to={`/leadership-team/4`}>
              <LeaderCard
                image="/images/olivier.jpg"
                name="Mr. Tolly Olivier"
                title={t("landing.dvcaf")}
              />
            </Link>
          </GridLayout>
          <Link to={"leadership-team"}>
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
          </Link>
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
            <Link
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
            </Link>
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
            <Carousel responsive={responsive}>
              {events.map((event, index) => (
                <div
                  style={{
                    margin: "0 10px",
                    height: "100%",
                  }}
                >
                  <Event key={index} event={event} />
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
        <ProgramGrid programs={programmes} />
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
