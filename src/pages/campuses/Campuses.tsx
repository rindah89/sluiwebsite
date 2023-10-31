import React, { useEffect } from "react";
import { Fade } from "react-reveal";

// styles
import styles from "./campus.module.css";

// components
import CampusCard from "../../components/campus-card/CampusCard";
import GridLayout from "../../components/grid/Grid";
import ProgramGrid from "../../components/program-grid/ProgramGrid";
import { programmesEN, programmesFR } from "../landing/Landing";
import Membership from "../../components/membership/Membership";
import { useTranslation } from "react-i18next";

const Campuses = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { t, i18n } = useTranslation();

  const programmes = i18n.language === "en" ? programmesEN : programmesFR;
  return (
    <div className="landing">
      <div className={styles.hero}>
        <h3>{t("campuses.name")}</h3>
        <h1>{t("campuses.campuses")}</h1>

        <p>{t("campuses.campuses_tag")}</p>
      </div>

      <div className={styles.campuses}>
        <GridLayout columns={2} gap={3}>
          <CampusCard
            image="/pics/optimized/ivs-7524.webp"
            name="Bonaberi"
            title={t("campuses.bonaberi_tag")}
            refLink="/campus-details"
            index={0}
          />

          <CampusCard
            image="/pics/optimized/ivs-7536.webp"
            name="Bonamoussadi"
            title={t("campuses.bonamoussadi_tag")}
            refLink="/campus-details"
            index={1}
          />

          <CampusCard
            image="/pics/optimized/ivs-7587.webp"
            name="Yaounde"
            title={t("campuses.yaounde_tag")}
            refLink="/campus-details"
            index={2}
          />

          <CampusCard
            image="/pics/optimized/ivs-7624.webp"
            name="Ndu"
            title={t("campuses.ndu_tag")}
            refLink="/campus-details"
            index={3}
          />
          <CampusCard
            image="/pics/optimized/ivs-7694.webp"
            name="Bamenda"
            title={t("campuses.bamenda_tag")}
            refLink="/campus-details"
            index={4}
          />
        </GridLayout>
      </div>

      <div className="programs_">
        <div className="headline">
          <h3>{t("campuses.right_fit")}</h3>
          <h2>{t("campuses.exciting_programs")}</h2>
        </div>
        <ProgramGrid programs={programmes} />
      </div>

      <div className="programs_">
        <div className="headline">
          <h2>{t("campuses.membership_partnership")}</h2>
        </div>
        <Membership />
      </div>
    </div>
  );
};

export default Campuses;
