import React, { useState } from "react";
import { Fade } from "react-reveal";

// style
import styles from "./application.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Application = () => {
  const width = window.innerWidth;
  const [isHover, setIsHover] = useState(false);

  const navigate = useNavigate();

  const [isBouncing, setIsBouncing] = useState(false);

  const startBounceAnimation = () => {
    console.log("bouncing animation has started");
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 2000); // Stop the bouncing after 1 second (adjust the duration as needed)
  };
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <Fade left>
          <div
            className={styles.back}
            onMouseEnter={() => {
              setIsHover(true);
              startBounceAnimation();
            }}
            onClick={() => navigate(-1)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className={isBouncing ? styles.bounce : ""}>
              <BsArrowLeft
                size={isHover ? 14 : 16}
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: isHover ? "#902d28" : "var(--main-color)",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: isHover ? "#902d28" : "var(--main-color)",
              }}
            >
              Back
            </p>
          </div>
        </Fade>
        <Fade right>
          <p
            style={{
              fontSize: width <= 450 ? "2rem" : "3.5rem",
              fontWeight: "bold",
              color: "var(--main-color)",
              width: "80%",
            }}
          >
            Application & Admissions
          </p>
        </Fade>
      </div>
      <div className={styles.event}>
        <h3>Your application and admission process at SLUI</h3>
        <div className={styles.event_section}>
          <p className={styles.heading}>
            We are happy to welcome you to our university! These are the
            individual steps of our general application process for degree
            students.
          </p>
          <div style={{ marginTop: 20 }}>
            <div style={{ marginBottom: 20 }}>
              <p className={styles.heading}>How to apply</p>
              <p className={styles.normal}>
                <span className={styles.numbering}>1.</span>
                <span>
                  Download and complete the admission form from the
                  institution’s website at{" "}
                  <a href="www.slui.org" target="_blank">www.slui.org</a>
                </span>
              </p>
              <p className={styles.normal}>
                <span className={styles.numbering}>2.</span>
                <span>Pay your application fees</span>
              </p>
            </div>
            <div>
              <p className={styles.heading}>Documents to make availabe</p>
              <ul
                style={{
                  marginLeft: 10,
                }}
              >
                <li className={styles.normal}>Completed admission form</li>
                <li className={styles.normal}>
                  Proof of payment of application fee
                </li>
                <li className={styles.normal}>
                  Photocopy of Birth Certificate
                </li>
                <li className={styles.normal}>
                  Photocopy of GCE "A" Level of BACC Certificate or their
                  equivalent <strong>(For HND & BTS Programs)</strong>
                </li>
                <li className={styles.normal}>
                  Photocopy of HPD or HND or their equivalent{" "}
                  <strong>(For BSc Programs)</strong>
                </li>
                <li className={styles.normal}>
                  Photocopy of Bachelors of Licenses or their equivalent{" "}
                  <strong>(For MSc Programs)</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
