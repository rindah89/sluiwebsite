import React from "react";
import { AiFillAccountBook, AiOutlineUser } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { SiTripadvisor } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";

// stylesheet
import styles from "./buddy.module.css";

// components
import Content from "../../components/content/Content";

const FindBuddy = () => {
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
          <button>
            <FiUsers style={{ marginRight: "0.3rem" }} />
            <h4>Students</h4>
          </button>
          <button>
            {" "}
            <SiTripadvisor style={{ marginRight: "0.3rem" }} />
            <h4>Admission Advicers</h4>
          </button>
          <button>
            <AiOutlineUser style={{ marginRight: "0.3rem" }} />
            <h4>Administrator</h4>
          </button>
          <button>
            <RiAdminFill style={{ marginRight: "0.3rem" }} />
            <h4>Alumni</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindBuddy;
