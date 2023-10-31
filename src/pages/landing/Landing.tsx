import React, { useEffect, useRef } from "react";
import { Fade } from "react-reveal";

// styles
import "./landing.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// components
import Programs from "../../components/programs/Programs";
import Content from "../../components/content/Content";
import ContentWithBg from "../../components/content-with-bg/ContentWithBg";
import ProgramGrid from "../../components/program-grid/ProgramGrid";
import GridLayout from "../../components/grid/Grid";
import LeaderCard from "../../components/leader-card/LeaderCard";
import Event from "../../components/event/Event";
import { Link } from "react-router-dom";
import { eventsEN, eventsFR } from "../news&events/News&events";
import Membership from "../../components/membership/Membership";
import { useTranslation } from "react-i18next";

const FR = "fr";

export const programmesEN = [
  {
    image: require("../../assets/converted/IVS_7525.jpg"),
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
    image: require("../../assets/optimized/IVC_0135.jpg"),
    desc: "We offer a variety of short courses. Explore today!",
    label: "Short Course",
    link: "/foundation",
  },
  {
    // image: '/pics/optimized/IVC_6598.jpg',
    image: require("../../assets/optimized/IVS_6598.jpg"),
    desc: "HND programmes are just so exciting, start a career in one of these programmes.",
    label: "HND",
    link: "/hnd",
  },
];

export const programmesFR = [
  {
    image: require("../../assets/converted/IVS_7525.jpg"),
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
    image: require("../../assets/optimized/IVC_0135.jpg"),
    desc: "Nous proposons une variété de cours de courte durée. Découvrez-les dès aujourd'hui !",
    label: "Cours de Courte Durée",
    link: "/foundation",
  },
  {
    // image: '/pics/optimized/IVC_6598.jpg',
    image: require("../../assets/optimized/IVS_6598.jpg"),
    desc: "Les programmes HND sont tout simplement passionnants, commencez une carrière dans l'un de ces programmes.",
    label: "HND",
    link: "/hnd",
  },
];

const Landing = () => {
  const width = window.innerWidth;
  const listRef = useRef<HTMLDivElement>(null);

  const { t, i18n } = useTranslation();

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
        <div className="apply-now">
          <a
            href="https://apply.stlouissystems.org/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              {t("landing.addmision")} <p>{t("landing.click_here")}</p>
            </button>
          </a>
        </div>

        <Fade bottom delay={500}>
          <Programs />
        </Fade>
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
          <GridLayout columns={3} gap={2}>
            <LeaderCard
              image="/images/nick.jpeg"
              name="Dr. Nick Ngwanyam"
              title={t("landing.president")}
            />

            <LeaderCard
              image="/images/florence.jpg"
              name="Dr. Manjong Florence"
              title={t("landing.dvcaa")}
            />

            <LeaderCard
              image="/images/olivier.jpg"
              name="Mr. Tolly Olivier"
              title={t("landing.dvcaf")}
            />
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
            padding:
              width <= 464 ? "0 2rem" : width <= 1024 ? "0 4rem" : "0 10rem",
          }}
        >
          <Fade right>
            <Carousel responsive={responsive}>
              {events.map((event, index) => (
                <div style={{ margin: "0 30px" }}>
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
