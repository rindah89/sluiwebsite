import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { SiTripadvisor } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";

// stylesheet
import styles from "./buddy.module.css";

// components
import Content from "../../components/content/Content";
import BuddyCard from "../../components/buddy-card/BuddyCard";

const FindBuddy = () => {
  const [activeSelector, setActiveSelector] = useState(0);
  // const [typeSelector, setTypeSelector] = useState("STUDENT");

  // ADMISSION_ADVICER;
  // ADMINISTRATOR;
  // ALUMNI;

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
          img="/pics/optimized/ivs-7466.webp"
        />
      </div>

      <div className={styles.filter}>
        <div className={styles.filter__options}>
          <button
            onClick={() => {
              setActiveSelector(0);
            }}
            className={activeSelector === 0 ? styles.active : ""}
          >
            <FiUsers size={30} style={{ marginRight: "0.3rem" }} />
            <h4>Students</h4>
          </button>
          <button
            onClick={() => {
              setActiveSelector(1);
            }}
            className={activeSelector === 1 ? styles.active : ""}
          >
            {" "}
            <SiTripadvisor size={30} style={{ marginRight: "0.3rem" }} />
            <h4>Admission Advicers</h4>
          </button>
          <button
            onClick={() => {
              setActiveSelector(2);
            }}
            className={activeSelector === 2 ? styles.active : ""}
          >
            <AiOutlineUser size={30} style={{ marginRight: "0.3rem" }} />
            <h4>Administrator</h4>
          </button>
          <button
            onClick={() => {
              setActiveSelector(3);
            }}
            className={activeSelector === 3 ? styles.active : ""}
          >
            <RiAdminFill size={30} style={{ marginRight: "0.3rem" }} />
            <h4>Alumni</h4>
          </button>
        </div>

        <div className={styles.buddies__grid}>
          <BuddyCard
            image="/images/test.jpg"
            title="Lead Engineer"
            name="The Tetee Programmer"
            whatsapp="https://wa.me/650999316"
          />
          <BuddyCard
            image="/images/test.jpg"
            title="Lead Engineer"
            name="The Tetee Programmer"
            whatsapp="https://wa.me/650999316"
          />
          <BuddyCard
            image="/images/test.jpg"
            title="Lead Engineer"
            name="The Tetee Programmer"
            whatsapp="https://wa.me/650999316"
          />
        </div>
      </div>
    </div>
  );
};

export default FindBuddy;
