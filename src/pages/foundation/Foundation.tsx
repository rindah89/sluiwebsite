import React from "react";
import { Fade } from "react-reveal";

// styles
import styles from "./foundation.module.css";
import { Link } from "react-router-dom";

const Foundation = () => {
  return (
    <div>
      <div className="hero">
        <h3>Our Foundation Course</h3>
        <Fade left>
          <h1 style={{ lineHeight: "1.1", margin: "3rem 0" }}>
            SLUI Medical Foundation Programme.
          </h1>
          <h4 className={styles.para}>
            The new SLUI International Medical Foundation Programme is a
            foundation course in Cameroon that provides you with the knowledge
            and competences to meet entry requirement into medical schools
            abroad.
          </h4>
        </Fade>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Your Preparatory Course for Undergraduate Studies</h2>
        </div>

        <div className={styles.content}>
          <h4>
            Upon completing the programme and achieving the required grades, you
            can directly progress to the first year in Medicine, Pharmacy,
            Dentistry or Veterinary Medicine programme of your choice in our
            partner medical schools across America, Europe, Asia and Africa.
          </h4>

          <h4>
            The International Medical Foundation Programme is the perfect choice
            for international and local students who need to complete one year
            of university studies after graduating from secondary school to
            enter medical school programmes abroad.
          </h4>

          <h4>
            <span>
              Note: Some of our programmes may have additional entry criteria,
              depending on the specific university or medical school the student
              will like to progress too.
            </span>
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>A Gateway to Your Medical School and Degree</h2>
        </div>

        <div className={styles.content}>
          <h4>
            Thanks to the preparatory courses in fields such as anatomy,
            pharmacology or biochemistry etc.., you will be well-equipped to
            start your medical school journey in one of our partner universities
            abroad.
          </h4>

          <h4>
            By joining the SLUI International Medical Foundation Programme, you
            will also receive a conditional offer from our partner universities
            to guarantee your progression you progression into year of your
            chosen medical programmes once you have completed your one year
            foundation programme.
          </h4>
        </div>
      </div>

      <div className={styles.desc}>
        <div className={styles.head}>
          <h2>Program Details</h2>
        </div>

        <ul>
          <li>
            <span>Duration:</span> 2 semesters (1 year)
          </li>
          <li>
            <span>Start:</span> October every year
          </li>
          <li>
            <span>Tuition Fees:</span> 1000.000 FCFA
          </li>
        </ul>

        <div className={styles.links}>
          <Link to="/">REQUEST INFORMATION</Link>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
