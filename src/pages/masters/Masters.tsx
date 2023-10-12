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
    title: "Masters Programmes List",
    list: [
      "Midwifery",
      "Pediatric Nursing",
      "Medical Surgical Nursing",
      "Oncology Nursing",
      "Nurse Anesthesia",
      "Geriatric Nursing",
      "Public Health",
      "Physiotherapy",
      "Medical Imaging Technology",
    ],
  },
];

const Masters = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="hero">
        <h3>Your start to career advancement</h3>
        <Fade left>
          <h1>Masters Programmes.</h1>
          <h4 className={styles.para}>
            St Louis University Institute gives the opportunity for workers in
            any part of the world to further their studies and gain quality
            degrees while still working 100% at their job site. This is made
            possible through their accredited distance learning platform that
            mimics the traditional onsite learning.
          </h4>
        </Fade>
      </div>

      <div
        style={{ minHeight: "40vh", background: "#F5F4F3" }}
        className="about"
      >
        <div className="desc">
          <h4 style={{ fontSize: "2.2rem" }}>
            Three Faculties and five campuses in four cities: Douala, Yaounde,
            Bamenda and Ndu. Lecturers and students from all over Cameroon and
            abroad in accredited English-language study programmes. Diverse
            opportunities in Biomedical and health sciences, Engineering and
            technology, Agriculture and natural sciences.
          </h4>
        </div>
      </div>

      <div style={{ minHeight: "25vh" }} className="about">
        <div className="desc">
          <h4>
            The following master&apos;s programmes are currently being offered
            for holders of Bachelor&apos;s degrees or equivalent at St Louis
            University Institute
          </h4>
        </div>
      </div>

      <div className={styles.list}>
        {programs.map((program) => (
          <ProgramCard program={program} />
        ))}
        <div>
          <h2>Core values</h2>
          <ul>
            <li>
              <AiOutlineArrowRight /> Flexibility, can be done almost
              exclusively online (70% online and 30% onsite)
            </li>
            <li>
              <AiOutlineArrowRight /> Qualified lecturers with interactive
              sessions from 6- 10 pm daily
            </li>
          </ul>
        </div>

        <div>
          <h2>Requirement</h2>
          <p className={styles.requirement}>
            In addition to entry requirement, students for this option must be
            ready to study online and must have access to internet connectivity.
          </p>
        </div>
      </div>

      <GeneralPull />
    </div>
  );
};

export default Masters;
