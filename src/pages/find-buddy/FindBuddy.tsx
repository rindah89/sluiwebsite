import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { SiTripadvisor } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";

// stylesheet
import styles from "./buddy.module.css";

// components
import Content from "../../components/content/Content";

const FindBuddy = () => {
  const [activeSelector, setActiveSelector] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className="content__section">
        <Content
          direction="RIGHT"
          caption="Find Your SLUI Buddy"
          title="Chat with our staff & students"
          subText=""
          description="Do you want first-hand information? Our staff & students are happy to share their experiences with you, tell you about their courses, their projects and student life in Douala, Yaounde, Bamenda & Ndu."
          refLink="/core-principle"
          btnText="See All Buddies"
          img="/images/landing2.webp"
        />
      </div>

      <div className={styles.filter}>
        <div className={styles.filter__options}>
          <button className={activeSelector === 0 ? styles.active : ""}>
            <FiUsers size={30} style={{ marginRight: "0.3rem" }} />
            <h4>Students</h4>
          </button>
          <button className={activeSelector === 1 ? styles.active : ""}>
            {" "}
            <SiTripadvisor size={30} style={{ marginRight: "0.3rem" }} />
            <h4>Admission Advicers</h4>
          </button>
          <button className={activeSelector === 2 ? styles.active : ""}>
            <AiOutlineUser size={30} style={{ marginRight: "0.3rem" }} />
            <h4>Administrator</h4>
          </button>
          <button className={activeSelector === 3 ? styles.active : ""}>
            <RiAdminFill size={30} style={{ marginRight: "0.3rem" }} />
            <h4>Alumni</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindBuddy;
