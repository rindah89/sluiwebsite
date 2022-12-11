import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Fade } from "react-reveal";

// styles
import styles from "./masters.module.css";

// imports
import GeneralPull from "../../components/general-pull/GeneralPull";

const Bachelors = () => {
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
        <div>
          <h2>Heath and Biomedical Sciences</h2>
          <ul>
            <li>
              <AiOutlineArrowRight /> Clinical Optimetry and Ophtamology
            </li>
            <li>
              <AiOutlineArrowRight /> Nutrition and Dietetics
            </li>
            <li>
              <AiOutlineArrowRight /> Radiology and Ultrasonography
            </li>
            <li>
              <AiOutlineArrowRight /> Physiotherapy
            </li>
            <li>
              <AiOutlineArrowRight /> Midwifery
            </li>
            <li>
              <AiOutlineArrowRight /> Pharmacy Technology
            </li>
            <li>
              <AiOutlineArrowRight /> Dental Therapy
            </li>
            <li>
              <AiOutlineArrowRight /> Medical Lab Sciences
            </li>
            <li>
              <AiOutlineArrowRight /> Pharmaceutical Sciences
            </li>
            <li>
              <AiOutlineArrowRight /> Nursing
            </li>
          </ul>
        </div>

        <div>
          <h2>Agriculture and Natural Sciences</h2>
          <ul>
            <li>
              <AiOutlineArrowRight /> Agronomy
            </li>
            <li>
              <AiOutlineArrowRight /> Animal Production
            </li>
          </ul>
        </div>
      </div>

      <GeneralPull />
    </div>
  );
};

export default Bachelors;
