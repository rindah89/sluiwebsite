import React, { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Fade } from "react-reveal";

// styles
import styles from "./masters.module.css";

// imports
import GeneralPull from "../../components/general-pull/GeneralPull";
import ProgramCard from "../../components/programs/ProgramCard";

const programs = [
  {
    title: "Health and Biomedical Sciences",
    list: [
      "Clinical Optimetry and Ophtamology",
      "Nutrition and Dietetics",
      "Radiology and ultrasonography",
      "Physiotherapy",
      "Midwifery",
      "Pharmaceutical Technology",
      "Dental Therapy",
      "Medical Lab Sciences",
      "Pharmaceutical Sciences",
      "Nursing",
    ],
  },
  {
    title: "Agriculture and Natural Sciences",
    list: ["Agronomy", "Animal Production"],
  },
];
const Bachelors = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="hero">
        <h3>Your start to career advancement</h3>
        <Fade left>
          <h1>Bachelors Programmes.</h1>
          <h4 className={styles.para}>
            Health, Agriculture, Engineering and Technology industries have
            never been so diverse. The modern range of courses offered by ST.
            Louis University Institute holds the right Bachelors programme for
            every talent. Discover the opportunities and your path to a dream
            career in the health, agriculture, engineering and technology
            sector.
          </h4>
        </Fade>
      </div>

      <div style={{ minHeight: "25vh" }} className="about">
        <div className="desc">
          <h4>Below are the list of Bachelors programmes we offer</h4>
        </div>
      </div>

      <div className={styles.list}>
        {programs.map((program) => (
          <ProgramCard program={program} />
        ))}
      </div>

      <GeneralPull />
    </div>
  );
};

export default Bachelors;
