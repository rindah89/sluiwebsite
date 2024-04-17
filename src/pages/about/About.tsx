import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Fade } from "react-reveal";
import ProgramGrid from "../../components/program-grid/ProgramGrid";
import styles from "./about.module.css";
import Membership from "../../components/membership/Membership";
import { useTranslation } from "react-i18next";

import { getProgrammes } from "../../redux/reducers/app";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { t, i18n } = useTranslation();
  const [programmes, setProgrammes] = useState([]);
  const [isFrenchProgrammes, setIsFrenchProgrammes] = useState([]);
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

  useEffect(() => {
    handlerGetProgrammes();
  }, []);

  useEffect(() => {
    filterData();
  }, [i18n.language]);

  useEffect(() => {
    filterData();
  }, [programmes]);

  const filterData = () => {
    if (i18n.language === "fr") {
      const programFilter = programmes.filter((item: any) => item.isFrench);
      setIsFrenchProgrammes(programFilter);
    } else {
      const programFilter = programmes.filter((item: any) => !item.isFrench);
      setIsFrenchProgrammes(programFilter);
    }
  };

  return (
    <div>
      <div className={styles.hero}>
        <h3>{t("about.name")}</h3>
        <Fade left>
          <h1>{t("about.tag")}</h1>
        </Fade>
      </div>
      <div className="about">
        <div className="desc">
          <Fade up>
            <h2>{t("about.brief")}</h2>
          </Fade>
          <h4
            style={{
              maxWidth: "100%",
            }}
          >
            {t("about.brief_text")}
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("about.vision")}:</h2>
        </div>

        <div className={styles.content}>
          <h4>{t("about.vision_text")}</h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("about.mission")}:</h2>
        </div>

        <div className={styles.content}>
          <h4>
            <span style={{ fontWeight: "600" }}>
              {`"${t("about.mission_text1")}".`}
            </span>
          </h4>
          <h4>
            {t("about.mission_text21")},{" "}
            <span style={{ fontWeight: "600" }}>
              {`"${t("about.mission_text22")}".`}
            </span>
          </h4>
          <h4>
            {t("about.mission_text31")}{" "}
            <span style={{ fontWeight: "600" }}>
              {t("about.mission_text32")}
            </span>
          </h4>
          <h4>{t("about.mission_text4")} </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("about.goal")}:</h2>
        </div>

        <div className={styles.content}>
          <h4 style={{ fontWeight: "600" }}>{t("about.goal_text")}</h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("about.objectives")}:</h2>
        </div>

        <div className={styles.content}>
          <h4>✨ {t("about.objective1")}</h4>
          <h4>✨ {t("about.objective2")}</h4>
          <h4>✨ {t("about.objective3")}</h4>
          <h4>✨ {t("about.objective4")}</h4>
          <h4>✨ {t("about.objective5")}</h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("about.motto")}:</h2>
        </div>

        <div className={styles.moto_content}>
          <h4
            style={{
              fontWeight: "600",
              fontSize: "2.3rem",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            <FaQuoteLeft size={10} style={{ margin: "0 2rem" }} />
            {t("about.motto_text")}
            <FaQuoteRight size={10} style={{ margin: "0 2rem" }} />
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>{t("about.slogan")}:</h2>
        </div>

        <div className={styles.moto_content}>
          <h4
            style={{
              fontWeight: "600",
              fontSize: "2.3rem",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            <FaQuoteLeft size={10} style={{ margin: "0 2rem" }} />
            {t("about.slogan_text")}
            <FaQuoteRight size={10} style={{ margin: "0 2rem" }} />
          </h4>
        </div>
      </div>

      <div className="programs_">
        <div className="headline">
          <h3>{t("about.right_fit")}</h3>
          <h2>{t("about.exciting_programs")}</h2>
        </div>
        <ProgramGrid programs={isFrenchProgrammes} />
      </div>

      <div className="programs_">
        <div className="headline">
          <h2>{t("about.memberships")}</h2>
        </div>
        <Membership />
      </div>
    </div>
  );
};

export default About;
